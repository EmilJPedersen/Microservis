import { Component, OnInit,NgModule } from '@angular/core';
import { DataService } from  '../../../../src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'lib-movies-lib',
  templateUrl: './movies-lib.component.html',
  styleUrls: ['./movies-lib.component.css']
})

export class MoviesLibComponent implements OnInit {
  movies: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBooks().subscribe(data=>{
      this.movies = data;
      console.log(this.movies);
    })
  }
  getBook(id):void{
    this.data.getSpecificBook(id).subscribe(data=>{
      this.movies=data;
      console.log(this.movies);
      })
    }

}
