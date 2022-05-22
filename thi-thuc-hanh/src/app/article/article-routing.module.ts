import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleComponent} from './article.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleCreateComponent} from './article-create/article-create.component';
import {ArticleEditComponent} from './article-edit/article-edit.component';


const routes: Routes = [
  {path: "article", component: ArticleComponent, children: [
      {path: "", component: ArticleListComponent},
      {path: "create", component: ArticleCreateComponent},
      {path: "edit/:id", component: ArticleEditComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
