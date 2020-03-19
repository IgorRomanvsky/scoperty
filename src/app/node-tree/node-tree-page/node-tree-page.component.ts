import { Component, OnInit } from '@angular/core';
import { NodeType } from '../types/node.type';

@Component({
  selector: 'app-node-tree-page',
  templateUrl: './node-tree-page.component.html',
  styleUrls: ['./node-tree-page.component.scss']
})
export class NodeTreePageComponent implements OnInit {
  private text = 'she had had to address problems';
  private listOfNodes: NodeType[] = [];


  constructor() { }

  ngOnInit() {
  }
}
