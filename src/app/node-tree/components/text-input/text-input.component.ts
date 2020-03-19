import { Component, OnInit } from '@angular/core';
import { NodeTreeService } from '../../services/node-tree.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
 public newText = '';
 constructor(private nodeTreeService: NodeTreeService) {}
 ngOnInit() {}

 public onTextChange(event: string) {
    this.nodeTreeService.analyzeNewTextInTreeSub.next(event);
 }
}
