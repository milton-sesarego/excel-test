import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DevelarCommonsModule } from './develar-commons/develar-commons.module';
import { ShowExcelComponent } from './carga-excel/show-excel/show-excel.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DevelarCommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
