import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-boxes',
  templateUrl: './view-boxes.component.html',
  styleUrls: ['./view-boxes.component.scss']
})
export class ViewBoxesComponent implements OnInit {
  private matrix = [
    [15, 0 , 80],
    [4, 5 , 0],
    [0, 5 , 80],
  ];

  private knownPointsOnMatrix = {};

  constructor() { }

  ngOnInit() {
  }

  private getAllKnownMatrixPoints() {
    this.matrix.forEach((row: number[], rowNumber: number) => {
      row.forEach((value: number, columnIndex: number) => {
        // const valueCoordinate = 
        // this.knownPointsOnMatrix.
      });
    });
  }

}
