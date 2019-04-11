<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BooksLibComponent } from './books-lib.component';
<<<<<<< HEAD
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


import { BooksLibComponent } from './books-lib.component';

>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
=======
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> parent of 8ffa367... Merge branch 'master' of https://github.com/EmilJPedersen/Microservis
import { browser } from 'protractor';

@NgModule({
<<<<<<< HEAD
  declarations: [
    BooksLibComponent
  ],
<<<<<<< HEAD
=======
  
>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
=======
  declarations: [BooksLibComponent],
>>>>>>> parent of 8ffa367... Merge branch 'master' of https://github.com/EmilJPedersen/Microservis
  imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule
  ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
  exports: [
    BooksLibComponent
  ]
=======
  exports: [BooksLibComponent]
>>>>>>> parent of 8ffa367... Merge branch 'master' of https://github.com/EmilJPedersen/Microservis
})
export class BooksLibModule { }
