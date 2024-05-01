import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieDatil } from '../interfaces/movies-detail';
import { environment } from '../../environments/environment';

const imgUrl = environment.imgUrl;

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private movieService = inject(MovieService);

  movies: MovieDatil[] = [];

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (res: any) => {
        this.movies = res.results as MovieDatil[];
        console.log("Movies fetched successfully");
      },
      error: (error) => {
        console.log('Error fetching movies: ', error);
      }
    });
  }

  getFullImageUrl(posterPath: String): String {
    return imgUrl + posterPath;
  }

}
