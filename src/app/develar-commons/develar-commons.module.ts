import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DevelarMaterialModule } from './develar-materials.module';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadComponent } from './upload/upload.component';
import { CargaExcelModule } from './carga-excel/carga-excel.module'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DevelarMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    CargaExcelModule
  ],
  declarations: [
    UploadComponent
  ],
  exports: [
    //DevelarMaterialModule,
    FileUploadModule,
    UploadComponent,
    CargaExcelModule
  ],
  providers: [
  ]
})
export class DevelarCommonsModule { }
