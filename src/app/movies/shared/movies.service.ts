import { Injectable } from '@angular/core'
import { IMovie } from './movies.model';
import { EventEmitter } from '@angular/core'

@Injectable()
export class MovieService {
    getMovies() {
        return MOVIES
    }
    getMovie(id: number) {
        return MOVIES.find(movie => movie.id === id)
    }
    searchMovies(searchTerm: string) {
        let term = searchTerm.toLocaleLowerCase();
        let results: IMovie[];


        results = MOVIES.filter(movie => {
            return movie.title.toLocaleLowerCase().indexOf(term) > -1
            // let matchingMovies = movie.t.filter(movie => movie.toLocaleLowerCase().indexOf(term) > -1);
            // matchingMovies = matchingMovies.map((movie: any) => {
            //     movie.movieId = movie.id;
            //     return movie;
            // })

            // results = results.concat(matchingMovies);
        })
        const emitter = new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(results);
        }, 100)
        return emitter;
    }
}





const MOVIES: IMovie[] = [{
    id: 1,
    title: 'Family',
    year: 1996,
    imageUrl: '/assets/images/family.jpeg',
    rated: 7 / 10,
    released: 2010,
    runtime: 30,
    genre: 'xxx',
    director: 'Oliva Kaso',
    writter: 'Naomi',
    actors: 'Dee, Emma, John, Richie',
    country: 'Africa',
    price: 200,
    language: 'Kiswahili'
},
{
    id: 2,
    title: 'Girls Night Out',
    year: 2006,
    imageUrl: '/assets/images/girlsnightout.jpeg',
    rated: 7 / 10,
    released: 2010,
    runtime: 30,
    genre: 'xxx',
    director: 'Isaac Kaso',
    writter: 'Bennice',
    actors: 'Dee, Emma, John, Richie',
    country: 'Africa',
    price: 200,
    language: 'Kiswahili'
},
{
    id: 3,
    title: 'Wedding',
    year: 1990,
    imageUrl: '/assets/images/girlsnightout.jpeg',
    rated: 7 / 10,
    released: 2010,
    runtime: 30,
    genre: 'xxx',
    director: 'Dennis Kaso',
    writter: 'Anna',
    actors: 'Dee, Emma, John, Richie',
    country: 'Africa',
    price: 200,
    language: 'Kiswahili'
},
{
    id: 4,
    title: 'The Squad',
    year: 1396,
    imageUrl: '/assets/images/thesquad.jpg',
    rated: 7 / 10,
    released: 2010,
    runtime: 30,
    genre: 'xxx',
    director: 'Oliva Kaso',
    writter: 'Anna',
    actors: 'Dee, Emma, John, Richie',
    country: 'Africa',
    price: 200,
    language: 'Kiswahili'
},
{
    id: 5,
    title: 'The Guardian',
    year: 1896,
    imageUrl: '/assets/images/theguardian.jpg',
    rated: 7 / 10,
    released: 2010,
    runtime: 30,
    genre: 'xxx',
    director: 'Oliva Kaso',
    writter: 'Anna',
    actors: 'Dee, Emma, John, Richie',
    country: 'Africa',
    price: 200,
    language: 'Kiswahili'
},
{
    id: 6,
    title: 'Second Sight',
    year: 1496,
    imageUrl: '/assets/images/thesquad.jpg',
    rated: 7 / 10,
    released: 2010,
    runtime: 30,
    genre: 'xxx',
    director: 'Oliva Kaso',
    writter: 'Anna',
    actors: 'Dee, Emma, John, Richie',
    country: 'Africa',
    price: 200,
    language: 'Kiswahili'
},
{
    id: 7,
    title: 'Shoot On Sight',
    year: 1679,
    imageUrl: '/assets/images/family.jpeg',
    rated: 7 / 10,
    released: 2010,
    runtime: 30,
    genre: 'xxx',
    director: 'Oliva Kaso',
    writter: 'Anna',
    actors: 'Dee, Emma, John, Richie',
    country: 'Africa',
    price: 200,
    language: 'Kiswahili'
},



]
