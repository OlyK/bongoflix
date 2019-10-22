import { Component, Input } from '@angular/core'
import { IMovie } from './shared';


@Component({
    selector: 'movie-thumbnail',
    template: `
    <div class="container" [routerLink]="['/movies', movie.id ]">

    <div class="card" style="width: 18rem;">

        <img class="card-img-top" src="{{movie.imageUrl}}" alt="movie image cap">
        <div class="card-body">
            <p class="card-text">Title:{{movie.title}}</p>
            <p class="card-text">Year of Production:{{movie.year}}</p>
        </div>
    </div>
</div>
    `

})

export class MovieThumbNailComponent {
    @Input() movie: IMovie


}