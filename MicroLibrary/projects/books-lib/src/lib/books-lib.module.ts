<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksLibComponent } from './books-lib.component';
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


import { BooksLibComponent } from './books-lib.component';

>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
import { browser } from 'protractor';

@NgModule({
  declarations: [
    BooksLibComponent
  ],
<<<<<<< HEAD
=======
  
>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
  imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule
  ],
<<<<<<< HEAD
=======
  
>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
  exports: [
    BooksLibComponent
  ]
})
export class BooksLibModule { }
