import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MovieDatil } from '../interfaces/movies-detail';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);
  constructor() { }

  getMovies(): Observable<MovieDatil> {
    return this.http.get<MovieDatil>(`${apiUrl}?api_key=${apiKey}`);
  }
}
