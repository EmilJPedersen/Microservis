import { NgModule } from '@angular/core';
import { MoviesLibComponent } from './movies-lib.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [MoviesLibComponent],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],

})
export class MoviesLibModule { }
