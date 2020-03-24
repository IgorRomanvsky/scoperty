/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CsvService } from './csv.service';
import { MatrixData } from '../types/matrix-data.type';

describe('Service: Csv', () => {
  let csvService: CsvService;
  beforeEach(() => {
    csvService = new CsvService();
    TestBed.configureTestingModule({
      providers: [CsvService]
    });
  });

  it('should ...', inject([CsvService], (service: CsvService) => {
    expect(service).toBeTruthy();
  }));

  it('#getValue should return real value from the real service', (

  ) => {
    const mockCsvData = '1,2,3 \n 4,5,6';
    csvService.setMatrixFromCsvFleText(mockCsvData);
  });
});
