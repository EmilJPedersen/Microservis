import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {book} from './book'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
private bookUrl='https://localhost:44350/api/books';
  
constructor(private http: HttpClient) { }
  
  
  getMovies () {
    return this.http.get('input url of Json Here (movie)');
   }
   getBooks () {
    return this.http.get('the same thing here (books)');
   } 
   getSpecificBook(id:number):Observable<book>{
    const url = `${this.bookUrl}/${id}`;
    return this.http.get<book>(url);
   }
}
