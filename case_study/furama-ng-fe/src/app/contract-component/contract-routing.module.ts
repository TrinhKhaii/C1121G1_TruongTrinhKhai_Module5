import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ContractListComponent} from "./contract-list/contract-list.component";
import {ContractCreateFormComponent} from "./contract-create-form/contract-create-form.component";

const routes: Routes = [
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create-form', component: ContractCreateFormComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ContractRoutingModule { }
