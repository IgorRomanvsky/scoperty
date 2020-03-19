import { Component, OnInit, OnDestroy } from '@angular/core';
import { NodeType } from 'src/app/node-tree/types/node.type';
import { Subscription } from 'rxjs';
import { NodeTreeService } from 'src/app/node-tree/services/node-tree.service';

@Component({
  selector: 'app-tree-viewer',
  templateUrl: './tree-viewer.component.html',
  styleUrls: ['./tree-viewer.component.scss']
})
export class TreeViewerComponent implements OnInit, OnDestroy {
  public text: string;
  public listOfNodes: NodeType[] = [];
  private textIsChangingSub: Subscription;
  constructor(private nodeTreeService: NodeTreeService) { }

  ngOnInit() {
    this.textIsChangingSub = this.nodeTreeService.analyzeNewTextInTreeSub.subscribe((newText: string) => {
      this.text = newText;
      this.initTreeCreation();
    });
  }

  ngOnDestroy() {
    this.textIsChangingSub.unsubscribe();
  }

  private initTreeCreation() {
    this.listOfNodes = [];
    this.createWordAppearancesObj();
    this.sortArrayByValueAppearance();
    this.createTree();
  }

  private createWordAppearancesObj(): void {
    this.text.split(' ').map((word: string) => {
      this.checkIfWordAlreadyBeenProceed(word);
    });
  }

  private checkIfWordAlreadyBeenProceed(word: string): void {
    const foundExistingWordInArray = this.listOfNodes.find((wa: NodeType) => wa.word === word);
    if (foundExistingWordInArray) {
      foundExistingWordInArray.count++;
    } else {
      this.listOfNodes.push({word, count: 1});
    }
  }

  private sortArrayByValueAppearance(): void {
    this.listOfNodes.sort((a, b) => a.count - b.count);
  }

  private createTree(): void {
    while (this.listOfNodes.length > 1) {
      this.createParentNodeFromTwoNodes();
    }
  }

  private createParentNodeFromTwoNodes(): void {
    const childNodeOne: NodeType = this.listOfNodes[0];
    const childNodeTwo: NodeType = this.listOfNodes[1];
    const arrayOfChildNodes: NodeType[] = [childNodeOne, childNodeTwo];
    const childAppearanceCount = childNodeOne.count + childNodeTwo.count;
    this.listOfNodes.splice(0, 2);
    this.listOfNodes.push({count: childAppearanceCount, children: arrayOfChildNodes});
  }
}
