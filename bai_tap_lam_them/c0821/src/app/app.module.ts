import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {MedicalRecordModule} from './medical-record/medical-record.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MedicalRecordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
