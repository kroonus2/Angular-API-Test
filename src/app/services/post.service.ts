import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

//Fazendo o fetch dos posts e limitando para 10 no maximo
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient)
  constructor() { }

  getPosts() {
    return this.http.get(BASE_URL);
  }
}
