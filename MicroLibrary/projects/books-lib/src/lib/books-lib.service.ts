import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { book } from '../../../Shared/book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

=======
import {HttpClient} from '@angular/common/http';
import { book } from '../../../Shared/book';

>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
@Injectable({
  providedIn: 'root'
})
export class BooksLibService {
<<<<<<< HEAD
  formData: book;
  readonly rootURL = 'https://localhost:44350/api';

  constructor(private http: HttpClient) { }

  postBook(formData: book) {
    return this.http.post(this.rootURL + '/Books', formData, httpOptions);
  }

}
=======
  formData : book;
  readonly rootURL = "https://localhost:44350/api";

  constructor(private http : HttpClient) { }

  postBook(formData : book){
    return this.http.post(this.rootURL+'/book',formData);
  }

  }
>>>>>>> parent of 2adea0d... Revert "Merge branch 'master' of https://github.com/EmilJPedersen/Microservis"
