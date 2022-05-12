import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MedicalRecordListComponent} from './medical-record-list/medical-record-list.component';
import {MedicalRecordCreateComponent} from './medical-record-create/medical-record-create.component';
import {MedicalRecordEditComponent} from './medical-record-edit/medical-record-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'medical-record-list'},
  {path: 'medical-record-list', component: MedicalRecordListComponent},
  {path: 'medical-record-create', component: MedicalRecordCreateComponent},
  {path: 'medical-record-edit/:id', component: MedicalRecordEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MedicalRecordRoutingModule { }
