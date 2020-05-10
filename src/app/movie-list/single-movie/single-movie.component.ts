import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie.models';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  movie: Movie;
  
  constructor(private router: Router,
              private moviesService: MoviesService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.movie = new Movie('', '','');
    const id = this.route.snapshot.params['id'];
    this.moviesService.getSingleMovie(+id).then(
      (movie: Movie) => {
        this.movie = movie;
      }
    );
  }

  onBack() {
    this.router.navigate(['/movies']);
  }

}
