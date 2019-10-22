import { Component } from '@angular/core';

@Component({
    selector: 'movie-app',
    template: `
    <nav-bar></nav-bar>
   <router-outlet></router-outlet>  
  `
})
export class MoviesAppComponent {
    title = 'app';
}
