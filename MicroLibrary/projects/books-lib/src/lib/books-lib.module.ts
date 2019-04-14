import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksLibComponent } from './books-lib.component';
import { browser } from 'protractor';
import { BooksLibService } from './books-lib.service';

@NgModule({
  declarations: [
    BooksLibComponent
  ],
  imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule
  ],
  exports: [
    BooksLibComponent
  ],
  providers: [BooksLibService]
})
export class BooksLibModule { }
