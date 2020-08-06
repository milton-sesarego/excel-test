import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DevelarMaterialModule } from './develar-materials.module';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadComponent } from './upload/upload.component';
import { CargaExcelComponent } from './carga-excel/carga-excel.component';
import { ShowExcelComponent } from './carga-excel/show-excel/show-excel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DevelarMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  declarations: [
    UploadComponent,
    CargaExcelComponent,
    ShowExcelComponent
  ],
  exports: [
    DevelarMaterialModule,
    FileUploadModule,
    UploadComponent,
  ],
  providers: [
  ]
})
export class DevelarCommonsModule { }
