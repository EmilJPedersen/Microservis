import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
 //{path: 'movies', component: MoviesComponent},
  //{path: 'books', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
