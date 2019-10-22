import { Component } from '@angular/core'
import { MovieService } from './shared/movies.service'
import { ActivatedRoute } from '@angular/router';
import { IMovie } from './shared';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html'

})

export class MovieDetailsComponent {
    movie: IMovie
    constructor(private movieService: MovieService, private route: ActivatedRoute) {

    }


    ngOnInit() {
        this.movie = this.movieService.getMovie(+this.route.snapshot.params['id'])
    }
}