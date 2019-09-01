import {NgModule} from '@angular/core';
import {MoviesComponent} from './movies.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: MovieListComponent},
    ]
  }
];

@NgModule({
  declarations: [
    MovieListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesModule {
}
