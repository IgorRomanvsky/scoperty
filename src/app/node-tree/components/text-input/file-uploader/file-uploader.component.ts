import { Component, OnInit } from '@angular/core';
import { NodeTreeService } from 'src/app/node-tree/services/node-tree.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  constructor(private nodeTreeService: NodeTreeService) { }

  ngOnInit() {
  }

  public handleFileInput(files: FileList) {
    const file = files.item(0);
    this.extractTextFromFile(file);
  }

  private async extractTextFromFile(file: any) {
    const text = await file.text();
    this.nodeTreeService.analyzeNewTextInTreeSub.next(text);
  }
}
