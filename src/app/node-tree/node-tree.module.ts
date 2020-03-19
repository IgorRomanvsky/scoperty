import { NgModule } from '@angular/core';
import { NodeTreePageComponent } from './node-tree-page/node-tree-page.component';
import { MainPageRoutesModule } from './node-tree-routing.module';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FileUploaderComponent } from './components/text-input/file-uploader/file-uploader.component';
import { TreeViewerComponent } from './components/text-input/tree-viewer/tree-viewer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
   declarations: [

       NodeTreePageComponent,
       TextInputComponent,
       FileUploaderComponent,
       TreeViewerComponent,

   ],
   imports: [
    MainPageRoutesModule,
    CommonModule,
    FormsModule,

   ],
   providers: [],
   bootstrap: [

   ]
})
export class NodeTreeModule { }
