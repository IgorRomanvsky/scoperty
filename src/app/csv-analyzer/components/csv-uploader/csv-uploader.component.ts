import { Component, OnInit } from '@angular/core';
import { CsvService } from '../../services/csv.service';

@Component({
  selector: 'app-csv-uploader',
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.scss']
})
export class CsvUploaderComponent implements OnInit {

  constructor(private csvService: CsvService) { }

  ngOnInit() {
  }

  public handleFileInput(files: FileList): void {
    const file = files.item(0);
    this.extractTextFromFile(file);
  }

  private async extractTextFromFile(file: any): Promise<void> {
    const data = await file.text();
    this.csvService.setMatrixFromCsvFleText(data);
  }
}

