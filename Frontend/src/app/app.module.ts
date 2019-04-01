import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {moviesLibModule} from '../../../../../../../../projects/movies-lib/src/movies-lib/movies-lib.component'
import {moviesLibModule} from '../../projects/movies-lib/src/lib/movies-lib.module'
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LibComponent } from 'projects/lib/src/public_api';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MoviesComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
