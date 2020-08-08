import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaludComponent } from './salud/salud.component';

const routes: Routes = [
  { path: 'salud', component: SaludComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
