import { Component, OnInit,NgModule } from '@angular/core';
import { DataService } from  '../../../../src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { MoviesLibService } from "./movies-lib.service";

@Component({
  selector: 'lib-movies-lib',
  templateUrl: './movies-lib.component.html',
  styleUrls: ['./movies-lib.component.css']
})

export class MoviesLibComponent implements OnInit {
  constructor(private service : MoviesLibService) { }

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
      Releasedate : '',
      Desc : ''
      
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
