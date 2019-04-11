import { NgModule } from '@angular/core';
import { BooksLibComponent } from './books-lib.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { browser } from 'protractor';
@NgModule({
  declarations: [BooksLibComponent],
  imports: [
   BrowserModule,
   HttpClientModule 
  ],
  exports: [BooksLibComponent]
})
export class BooksLibModule { }
