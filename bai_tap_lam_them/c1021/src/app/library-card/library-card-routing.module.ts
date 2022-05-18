import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibraryCardComponent} from './library-card.component';
import {LibraryCardListComponent} from './library-card-list/library-card-list.component';
import {LibraryCardCreateComponent} from './library-card-create/library-card-create.component';


const routes: Routes = [
  {path: "library-card", component: LibraryCardComponent, children: [
      {path: '', component: LibraryCardListComponent},
      {path: 'create/:bookId', component: LibraryCardCreateComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryCardRoutingModule { }
