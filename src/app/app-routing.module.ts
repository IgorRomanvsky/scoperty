import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'tree',
    loadChildren: () => import('./node-tree/node-tree.module').then(m => m.NodeTreeModule)
  },
  {
    path: 'csv',
    loadChildren: () => import('./csv-analyzer/csv-analyzer.module').then(m => m.CsvAnalyzerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
