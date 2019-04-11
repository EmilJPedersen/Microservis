<<<<<<< HEAD
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksLibService } from './books-lib.service';
=======
=======
>>>>>>> parent of 8ffa367... Merge branch 'master' of https://github.com/EmilJPedersen/Microservis
import { Component, OnInit,NgModule } from '@angular/core';
import { DataService } from  '../../../../src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { BooksLibService } from "./books-lib.service";
>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"

=======
>>>>>>> parent of 8ffa367... Merge branch 'master' of https://github.com/EmilJPedersen/Microservis
@Component({
  selector: 'lib-books-lib',
  templateUrl: './books-lib.component.html',
  styleUrls: ['./books-lib.component.css']
})
export class BooksLibComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
  constructor(public service: BooksLibService) { }
=======
  constructor(private service : BooksLibService) { }
>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
=======
books:object; 
  constructor(private data: DataService) { }
>>>>>>> parent of 8ffa367... Merge branch 'master' of https://github.com/EmilJPedersen/Microservis

  ngOnInit() {
    this.resetForm();
  }
<<<<<<< HEAD
<<<<<<< HEAD
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
=======
  resetForm(form? : NgForm){
    if(form != null){
      form.resetForm();
    }    
    this.service.formData = {
      id : null,
      Titel : '',
      ImagePath : '',
      pages : null,
      desc : ''
      
>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
=======
  getBook(id):void{
    this.data.getSpecificBook(id).subscribe(data=>{
      this.books=data;
      console.log(this.books);
      })
>>>>>>> parent of 8ffa367... Merge branch 'master' of https://github.com/EmilJPedersen/Microservis
    }


  }
  onSubmit(form : NgForm){
    this.insertRecord(form);
  }
  insertRecord(form : NgForm){
     this.service.postBook(form.value).subscribe(res => {
       this.resetForm(form);
     })
  }

}
