import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { CsvService } from "src/app/csv-analyzer/services/csv.service";
import { MatrixData } from "src/app/csv-analyzer/types/matrix-data.type";

@Component({
  selector: "app-view-boxes",
  templateUrl: "./view-boxes.component.html",
  styleUrls: ["./view-boxes.component.scss"]
})
export class ViewBoxesComponent implements OnInit, OnDestroy {
  public originalInput: string;
  public matrix: any[];

  // The hash map will use the value position inside the matrix as the Map key
  // and the value as the Map value
  private knownMatrixPointsMap = new Map();
  private arrayOfUnknownMatrixPoint: number[][] = [];

  private csvSub: Subscription;

  constructor(private scvService: CsvService) {}

  ngOnInit() {
    this.csvSub = this.scvService.matrixFromCsvFileDataSub.subscribe(
      (matrixData: MatrixData) => {
        this.originalInput = matrixData.originalInput;
        this.matrix = matrixData.dataAsMatrix;
        this.startMatrixInterpolation();
      }
    );
  }

  ngOnDestroy() {
    this.csvSub.unsubscribe();
  }

  private startMatrixInterpolation(): void {
    this.createHashMapAndArrayFromMatrixValues();
    this.loopInUnknownPointsAndFindValues();
  }

  // The function will create an hashmap from the nun zero values of the matrix
  // and an array with the positions of the zero values
  private createHashMapAndArrayFromMatrixValues(): void {
    this.matrix.forEach((arr: number[], arrIdx: number) => {
      arr.forEach((arrValue: number, valIdx: number) => {
        if (arrValue === 0) {
          this.arrayOfUnknownMatrixPoint.push([arrIdx, valIdx]);
        } else {
          this.knownMatrixPointsMap.set([arrIdx, valIdx], arrValue);
        }
      });
    });
  }

  private loopInUnknownPointsAndFindValues(): void {
    this.arrayOfUnknownMatrixPoint.forEach((unknownValuePosition: number[]) => {
      this.getCoordinatedOfMissingPoints(unknownValuePosition);
    });
  }

  // The function will calculate the missing value according to the average of the non zero values
  // by assuming that the value of any point is weighted average of all non zero values.
  // and weight it by 1/distance squared
  private getCoordinatedOfMissingPoints(unknownPoint: number[]): void {
    let totalWeight = 0;
    let totalSum = 0;
    let dSquare: number;
    this.knownMatrixPointsMap.forEach(
      (existingPointValue: number, existingPointValuePosition: number[]) => {
        dSquare =
          Math.pow(unknownPoint[0] - existingPointValuePosition[0], 2) +
          Math.pow(unknownPoint[1] - existingPointValuePosition[1], 2);
        totalWeight = totalWeight + 1 / dSquare;
        totalSum = totalSum + existingPointValue / dSquare;
      }
    );
    this.matrix[unknownPoint[0]][unknownPoint[1]] =
      Math.trunc((totalSum / totalWeight) * 100) / 100;
  }
}
