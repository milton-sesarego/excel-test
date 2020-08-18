import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SaludComponent } from './salud/salud.component';
import { DevelarCommonsModule } from './develar-commons/develar-commons.module';


const routes: Routes = [
  { path: 'salud', component: SaludComponent },
];

@NgModule({
  declarations: [SaludComponent],
  imports: [RouterModule.forRoot(routes), CommonModule,DevelarCommonsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
