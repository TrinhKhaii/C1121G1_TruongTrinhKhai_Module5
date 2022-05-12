import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MedicalRecordListComponent } from './medical-record/medical-record-list/medical-record-list.component';
import { MedicalRecordCreateComponent } from './medical-record/medical-record-create/medical-record-create.component';
import {MedicalRecordModule} from './medical-record/medical-record.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MedicalRecordEditComponent} from './medical-record/medical-record-edit/medical-record-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicalRecordListComponent,
    MedicalRecordCreateComponent,
    MedicalRecordEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MedicalRecordModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
