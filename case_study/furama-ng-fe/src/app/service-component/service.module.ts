import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContractListComponent} from "../contract-component/contract-list/contract-list.component";
import {ServiceListComponent} from "./service-list/service-list.component";
import {VillaCreateFormComponent} from "./villa-create-form/villa-create-form.component";
import {VillaEditFormComponent} from "./villa-edit-form/villa-edit-form.component";
import {RouterModule} from "@angular/router";
import {ServiceRoutingModule} from "./service-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ServiceListComponent,
    VillaCreateFormComponent,
    VillaEditFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ServiceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ServiceModule { }
