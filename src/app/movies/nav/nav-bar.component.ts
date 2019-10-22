import { Component } from '@angular/core';
import { IMovie, MovieService } from '../shared';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [
        `
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px) { #searchForm: {display: none;} }
    li > a.active { color: #F97924}
    div > a { color: #F97924}
    `
    ]
})
export class NavBarComponent {
    searchTerm: string = "";
    foundMovies: IMovie[];
    constructor(private movieService: MovieService) {

    }

    searchMovies(searchTerm) {
        this.movieService.searchMovies(searchTerm).subscribe(movies => {
            this.foundMovies = movies
            console.log(movies);
        })
    }

}