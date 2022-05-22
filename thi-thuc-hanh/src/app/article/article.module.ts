import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleCreateComponent } from './article-create/article-create.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ArticleListComponent } from './article-list/article-list.component';
import { DatePipe } from '@angular/common';
import { ArticleEditComponent } from './article-edit/article-edit.component'

@NgModule({
  declarations: [
    ArticleCreateComponent,
    ArticleListComponent,
    ArticleEditComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class ArticleModule { }
