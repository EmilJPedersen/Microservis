import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksLibService } from './books-lib.service';
import { book } from 'projects/Shared/book';

@Component({
  selector: 'lib-books-lib',
  templateUrl: './books-lib.component.html',
  styleUrls: ['./books-lib.component.css']
})
export class BooksLibComponent implements OnInit {
  constructor(public service: BooksLibService) { }

  books: book[];

  ngOnInit() {
    this.resetForm();
    this.getBooks();
  }

  getBooks(): void {
    this.service.getAll()
    .subscribe(books => this.books = books);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id : null,
      Titel : '',
      ImagePath : '',
      pages : null,
      desc : ''
    };
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  insertRecord(form: NgForm) {
     this.service.postBook(form.value).subscribe(res => {
       this.resetForm(form);
     });
  }

}
