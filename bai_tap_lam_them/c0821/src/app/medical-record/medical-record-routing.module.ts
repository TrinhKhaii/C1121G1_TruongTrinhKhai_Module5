import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalRecordComponent} from './medical-record.component';
import {MedicalRecordListComponent} from './medical-record-list/medical-record-list.component';
import {MedicalRecordEditComponent} from './medical-record-edit/medical-record-edit.component';
import {MedicalRecordCreateComponent} from './medical-record-create/medical-record-create.component';


const routes: Routes = [
  {path: "medical-record", component: MedicalRecordComponent, children: [
      {path: "", component: MedicalRecordListComponent},
      {path: "create", component: MedicalRecordCreateComponent},
      {path: "edit/:id", component: MedicalRecordEditComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordRoutingModule { }
