import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { movie } from 'projects/Shared/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesLibService {
  formData : movie;
  readonly rootURL = "https://localhost:44350/api"

  constructor(private  http: HttpClient) { }

  postBook(formData : movie){
    return this.http.post(this.rootURL+'/movie',formData);
  }

}