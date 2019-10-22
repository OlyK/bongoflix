import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MovieListComponent, MovieThumbNailComponent, MovieDetailsComponent } from './movies/index'

import { MoviesAppComponent } from './movie-app.component'
import { NavBarComponent } from './movies/nav/nav-bar.component'
import { AppComponent } from './app.component';
import { appRoutes } from './routes'
import { MovieService } from './movies/shared/movies.service'

@NgModule({
  declarations: [
    AppComponent,
    MoviesAppComponent,
    MovieThumbNailComponent,
    MovieListComponent,
    MovieDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [MoviesAppComponent]
})
export class AppModule { }

