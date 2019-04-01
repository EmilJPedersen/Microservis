import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { book } from '../../../Shared/book';

@Injectable({
  providedIn: 'root'
})
export class BooksLibService {
  formData : book;
  readonly rootURL = "https://localhost:44350/api";

  constructor(private http : HttpClient) { }

  postBook(formData : book){
    return this.http.post(this.rootURL+'/book',formData);
  }

  }