import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesLibService {

  constructor(private  http: HttpClient) { }

getMovies(){
  return this.http.get('the same thing here (Movies)');
}

}