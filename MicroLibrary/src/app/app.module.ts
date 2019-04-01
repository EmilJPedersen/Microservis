import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BooksLibModule} from '../../projects/books-lib/src/lib/books-lib.module'
import {MoviesLibModule} from '../../projects/movies-lib/src/lib/movies-lib.module'
import { AppComponent } from './app.component';
import { MovieRoutingModule} from '../../projects/movies-lib/src/lib/movies-lib.component.routing';
import { BooksRoutingModule } from 'projects/books-lib/src/lib/books-lib.component.routing';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BooksLibModule,
    MoviesLibModule,
    MovieRoutingModule,
    BooksRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
