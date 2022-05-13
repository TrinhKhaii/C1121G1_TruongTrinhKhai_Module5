import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractListComponent} from "./contract-list/contract-list.component";
import {ContractCreateFormComponent} from "./contract-create-form/contract-create-form.component";
import {ContractRoutingModule} from "./contract-routing.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateFormComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ContractModule {
}
