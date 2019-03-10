import { Component, OnInit } from '@angular/core';
import { DataService } from  '../data.service';

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
