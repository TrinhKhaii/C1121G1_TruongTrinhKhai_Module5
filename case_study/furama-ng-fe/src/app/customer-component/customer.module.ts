import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerCreateFormComponent} from "./customer-create-form/customer-create-form.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerEditFormComponent} from "./customer-edit-form/customer-edit-form.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CustomerRoutingModule} from "./customer-routing.module";



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateFormComponent,
    CustomerEditFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
