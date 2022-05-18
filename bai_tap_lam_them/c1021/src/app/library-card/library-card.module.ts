import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryCardRoutingModule } from './library-card-routing.module';
import { LibraryCardCreateComponent } from './library-card-create/library-card-create.component';
import { LibraryCardListComponent } from './library-card-list/library-card-list.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LibraryCardComponent} from './library-card.component';


@NgModule({
  declarations: [
    LibraryCardComponent,
    LibraryCardCreateComponent,
    LibraryCardListComponent
  ],
  imports: [
    CommonModule,
    LibraryCardRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class LibraryCardModule { }
