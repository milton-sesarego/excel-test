import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaExcelComponent } from './develar-commons/carga-excel/carga-excel.component';

const routes: Routes = [
  { path: 'carga-excel', component: CargaExcelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
