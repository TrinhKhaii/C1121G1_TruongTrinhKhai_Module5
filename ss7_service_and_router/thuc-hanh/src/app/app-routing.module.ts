import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';


// @ts-ignore
const router: Router = [
  {
    path: 'timelines', component: TimelinesComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // @ts-ignore
    RouterModule.forRoot(router)
  ]
})
export class AppRoutingModule { }
