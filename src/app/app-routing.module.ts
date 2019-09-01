import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './views/shared/not-found/not-found.component';
import {LandingModule} from './views/pages/landing/landing.module';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', loadChildren: './views/pages/landing/landing.module#LandingModule'},

  // otherwise redirect to home
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    LandingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
