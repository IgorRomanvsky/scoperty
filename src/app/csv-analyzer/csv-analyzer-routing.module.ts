import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvAnalyzerPageComponent } from './csv-analyzer-page/csv-analyzer-page.component';


const mainPageRouting: Routes = [
  { path: '', component: CsvAnalyzerPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(mainPageRouting)],
  exports: [RouterModule],
})
export class CsvAnalyzerRoutingModule {}
