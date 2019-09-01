import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './views/pages/landing/landing.component';
import { MoviesComponent } from './views/pages/movies/movies.component';
import { PhotosComponent } from './views/pages/photos/photos.component';
import { ProjectsComponent } from './views/pages/projects/projects.component';
import { SmartHouseComponent } from './views/pages/smart-house/smart-house.component';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';
import {LandingModule} from './views/pages/landing/landing.module';
import {ConstApp} from './core/constApp';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MoviesComponent,
    PhotosComponent,
    ProjectsComponent,
    SmartHouseComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule
  ],
  providers: [ConstApp],
  bootstrap: [AppComponent]
})
export class AppModule { }
