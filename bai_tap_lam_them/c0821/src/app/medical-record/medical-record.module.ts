import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRecordRoutingModule } from './medical-record-routing.module';
import { MedicalRecordCreateComponent } from './medical-record-create/medical-record-create.component';
import { MedicalRecordListComponent } from './medical-record-list/medical-record-list.component';
import { MedicalRecordEditComponent } from './medical-record-edit/medical-record-edit.component';
import {MedicalRecordComponent} from './medical-record.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    MedicalRecordComponent,
    MedicalRecordCreateComponent,
    MedicalRecordListComponent,
    MedicalRecordEditComponent
  ],
  imports: [
    CommonModule,
    MedicalRecordRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class MedicalRecordModule { }
