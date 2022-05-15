import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {TemplatesRoutingModule} from "./templates-routing.module";
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    NavBarComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
