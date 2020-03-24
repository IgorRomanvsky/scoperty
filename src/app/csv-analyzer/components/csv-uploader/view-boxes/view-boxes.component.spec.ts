/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewBoxesComponent } from './view-boxes.component';
import { CsvService } from 'src/app/csv-analyzer/services/csv.service';
import { defer } from 'rxjs';
import { MatrixData } from 'src/app/csv-analyzer/types/matrix-data.type';
import { element } from 'protractor';

export function fakeAsyncResponse<TMatrixData>(data: MatrixData) {
  return defer(() => Promise.resolve(data));
}

const csvService = {
  get() {
    return fakeAsyncResponse({originalInput: '1,2,3 \n 4,5,6', dataAsMatrix: [[1, 2, 3],[4, 5, 6]]});
  }
};

describe('ViewBoxesComponent', () => {
  let component: ViewBoxesComponent;
  let fixture: ComponentFixture<ViewBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBoxesComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBoxesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data in input box', async(async () => {
    const html: Document = fixture.debugElement.nativeElement;
    const originalTextHtml =  html.querySelectorAll('.box')[0].textContent;
    const resultHtmlInput =  html.querySelectorAll('.box')[1].textContent;

  }));
});
