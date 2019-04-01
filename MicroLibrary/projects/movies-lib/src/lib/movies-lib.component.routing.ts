import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesLibComponent } from './movies-lib.component';

const routes: Routes = [
{path:'movies', component: MoviesLibComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
