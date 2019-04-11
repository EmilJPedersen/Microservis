import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksLibService {

  constructor(private http:HttpClient) { }

getBooks(){
  return this.http.get('the same thing here (Books)');
}
}