import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movies: any[];

  constructor() { }

  ngOnInit() {
    this.movies = [
      {
        "Title": "Iron Man",
        "Year": "2008",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
      },
      {
        "Title": "Iron Man 3",
        "Year": "2013",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Iron Man 2",
        "Year": "2010",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc@._V1_SX300.jpg"
      }
    ]
  }

}
