import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from  '../data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
  BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [BooksComponent]
})
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBooks().subscribe(data => {
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
