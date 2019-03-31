import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from  '../data.service';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
/*@NgModule({
  declarations: [
  MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MoviesComponent]
})
Det ligger i app.module.ts*/

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    }) 
  }

}
