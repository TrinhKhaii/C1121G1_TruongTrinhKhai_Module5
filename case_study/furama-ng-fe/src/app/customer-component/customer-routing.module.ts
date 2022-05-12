import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerCreateFormComponent} from "./customer-create-form/customer-create-form.component";
import {CustomerEditFormComponent} from "./customer-edit-form/customer-edit-form.component";

const routes: Routes = [
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create-form', component: CustomerCreateFormComponent},
  {path: 'customer-edit-form/:id', component: CustomerEditFormComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CustomerRoutingModule { }
