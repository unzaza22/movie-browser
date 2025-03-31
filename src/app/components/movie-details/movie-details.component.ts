import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  movie: any;

  constructor(private service: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        let id = params['imdbID'];
        this.service.getMovieDetails(id)
          .subscribe(resp=>this.movie = resp);
      });
  }

  goBack() {
    window.history.back();
  }

}
