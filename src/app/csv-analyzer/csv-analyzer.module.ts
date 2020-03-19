import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CsvAnalyzerPageComponent } from './csv-analyzer-page/csv-analyzer-page.component';
import { ViewBoxesComponent } from './components/csv-uploader/view-boxes/view-boxes.component';
import { CsvUploaderComponent } from './components/csv-uploader/csv-uploader.component';
import { CsvAnalyzerRoutingModule } from './csv-analyzer-routing.module';


@NgModule({
   declarations: [
        CsvAnalyzerPageComponent,
        ViewBoxesComponent,
        CsvUploaderComponent
   ],
   imports: [
    CommonModule,
    FormsModule,
    CsvAnalyzerRoutingModule

   ],
   providers: [],
   bootstrap: [

   ]
})
export class CsvAnalyzerModule { }
