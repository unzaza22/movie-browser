import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movies: any[];

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.searchMovies('iron man')
    .subscribe(resp=>this.movies=resp.Search);
  }

}
