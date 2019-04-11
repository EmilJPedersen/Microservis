import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksLibComponent } from './books-lib.component';
import { browser } from 'protractor';
@NgModule({
  declarations: [
    BooksLibComponent
  ],
  imports: [
   BrowserModule,
   HttpClientModule 
  ],
  exports: [
    BooksLibComponent
  ]
})
export class BooksLibModule { }
