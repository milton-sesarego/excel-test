import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaExcelComponent } from './carga-excel.component';
import { ShowExcelComponent } from './show-excel/show-excel.component';
import { DevelarMaterialModule } from '../develar-materials.module'

@NgModule({
  declarations: [
    CargaExcelComponent,
    ShowExcelComponent
  ],
  imports: [
    CommonModule,
    DevelarMaterialModule
  ],
  exports: [
    CargaExcelComponent,
    ShowExcelComponent
  ]
})
export class CargaExcelModule { }
