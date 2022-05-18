import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BookModule} from './book/book.module';
import {LibraryCardModule} from './library-card/library-card.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    LibraryCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
