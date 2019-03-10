import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }
  
  
  getMovies () {
    return this.http.get('input url of Json Here (movie)');
   }
   getBooks () {
    return this.http.get('the same thing here (books)');
   } 
}
