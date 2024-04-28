import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  http = inject(HttpClient);
  posts: any = [];

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .subscribe((posts: any) => {
        console.log(posts);
        this.posts = posts;
      });
  }
}
//Fazendo o fetch dos posts e limitando para 10 no maximo