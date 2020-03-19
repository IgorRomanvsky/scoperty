import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-uploader',
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.scss']
})
export class CsvUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public handleFileInput(files: FileList) {
    const file = files.item(0);
    this.extractTextFromFile(file);
  }

  private async extractTextFromFile(file: any) {
    const text = await file.text();
  }
}

