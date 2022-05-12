import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {TemplatesRoutingModule} from "./templates-routing.module";


@NgModule({
  declarations: [
    NavBarComponent
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
