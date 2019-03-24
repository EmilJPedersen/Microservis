import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksLibComponent } from './Books-lib.component';

const routes: Routes = [ 
    {path: 'books', component: BooksLibComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class BookLibRoutingModule { }
  


