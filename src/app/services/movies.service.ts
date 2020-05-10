import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie.models';
import { Subject } from 'rxjs/subject';
import * as firebase from 'firebase';

@Injectable()
export class MoviesService {

  movies: Movie[] = [];
  moviesSubject = new Subject<Movie[]>();

  constructor() { 
    this.getMovies();
  }

  emitMovies() {
    this.moviesSubject.next(this.movies);
  }

  saveMovies() {
    firebase.database().ref('/movies').set(this.movies);
  }

  getMovies() {
    firebase.database().ref('/movies')
    .on('value', (data) => {
      this.movies = data.val() ? data.val(): [];
      this.emitMovies();
    });
  }

  getSingleMovie(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/movies/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewMovie(newMovie: Movie) {
    this.movies.push(newMovie);
    this.saveMovies();
    this.emitMovies();
  }

  removeMovie(movie: Movie) {
    const movieIndexToRemove = this.movies.findIndex(
      (movieEl) => {
        if(movieEl === movie) {
          return true;
        }
      }
    );
    this.movies.splice(movieIndexToRemove, 1);
    this.saveMovies();
    this.emitMovies();
  }

  

}
