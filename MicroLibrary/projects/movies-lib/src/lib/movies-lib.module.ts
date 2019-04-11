import { NgModule } from '@angular/core';
import { MoviesLibComponent } from './movies-lib.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MoviesLibComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],

})
export class MoviesLibModule { }
