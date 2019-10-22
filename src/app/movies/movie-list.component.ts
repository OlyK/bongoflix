import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MovieService } from './shared/movies.service'

@Component({

    template: `
 

<div class="d-flex flex-wrap">
<div *ngFor="let movie of movies" >
<movie-thumbnail [movie]="movie"  ></movie-thumbnail>

</div>
</div>
    `


})


export class MovieListComponent {
    movies: any[]
    constructor(private route: ActivatedRoute, private movieService: MovieService) {
        this.movies = this.movieService.getMovies()
    }
}