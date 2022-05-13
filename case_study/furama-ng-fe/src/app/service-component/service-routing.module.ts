import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ServiceListComponent} from "./service-list/service-list.component";
import {VillaCreateFormComponent} from "./villa-create-form/villa-create-form.component";
import {VillaEditFormComponent} from "./villa-edit-form/villa-edit-form.component";

const routes: Routes = [
  {path: 'service-list', component: ServiceListComponent},
  {path: 'villa-create-form', component: VillaCreateFormComponent},
  {path: 'villa-edit-form', component: VillaEditFormComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ServiceRoutingModule { }
