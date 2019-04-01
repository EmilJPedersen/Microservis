import { Component, OnInit,NgModule } from '@angular/core';
import { DataService } from  '../../../../src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { BooksLibService } from "./books-lib.service";

@Component({
  selector: 'lib-books-lib',
  templateUrl: './books-lib.component.html',
  styleUrls: ['./books-lib.component.css']
})
export class BooksLibComponent implements OnInit {
  constructor(private service : BooksLibService) { }

  ngOnInit() {
    this.resetForm();
  }
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
