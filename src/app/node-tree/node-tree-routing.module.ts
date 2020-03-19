import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeTreePageComponent } from './node-tree-page/node-tree-page.component';


const mainPageRouting: Routes = [
  { path: '', component: NodeTreePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(mainPageRouting)],
  exports: [RouterModule],
})
export class MainPageRoutesModule {}
