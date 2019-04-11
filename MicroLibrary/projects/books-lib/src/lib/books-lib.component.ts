import { Component, OnInit,NgModule } from '@angular/core';
import { DataService } from  '../../../../src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'lib-books-lib',
  templateUrl: './books-lib.component.html',
  styleUrls: ['./books-lib.component.css']
})
export class BooksLibComponent implements OnInit {
books:object; 
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBooks().subscribe(data=>{
      this.books = data;
      console.log(this.books);
    })
  }
  getBook(id):void{
    this.data.getSpecificBook(id).subscribe(data=>{
      this.books=data;
      console.log(this.books);
      })
    }

}
