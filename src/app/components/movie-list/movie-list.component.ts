import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movies: any[];

  constructor(private service: MoviesService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activateRoute.queryParams.subscribe(
      qparams=>{
        let q = qparams['q'];
        this.service.searchMovies(q)
        .subscribe(resp=>this.movies=resp.Search)
      }
    );
  
  }

}
