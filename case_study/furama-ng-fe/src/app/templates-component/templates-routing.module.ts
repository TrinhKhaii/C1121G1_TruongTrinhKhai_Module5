import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NavBarComponent} from "./nav-bar/nav-bar.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: NavBarComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class TemplatesRoutingModule { }
