import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MatrixData } from '../types/matrix-data.type';

@Injectable({
  providedIn: "root"
})
export class CsvService {
  public matrixFromCsvFileDataSub: Subject<MatrixData> = new Subject<MatrixData>();

  constructor() {}

  public setMatrixFromCsvFleText(data: string): void {
    const matrix: any[] = [];
    const rows: string[] = data.split('\n');

    rows.forEach((row: string) => {
      if (row.length) {
        const rowCells = row.split(/[ ,]+/).map(Number);
        matrix.push(rowCells);
      }
    });
    this.matrixFromCsvFileDataSub.next({originalInput: data, dataAsMatrix: matrix});
  }
}
