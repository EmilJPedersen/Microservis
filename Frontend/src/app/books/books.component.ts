import { Component, OnInit } from '@angular/core';
import { DataService } from  '../data.service';

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

}
