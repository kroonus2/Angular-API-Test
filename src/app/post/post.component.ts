import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  // http = inject(HttpClient);
  private postService = inject(PostService);
  posts: any = [];
  //Quando iniciar...
  ngOnInit(): void {
    this.loadPosts();
  }
  //Metodo para obter os posts do PostService, onde é feito o get da url
  loadPosts() {
    this.postService.getPosts().subscribe(({
      next: (posts: any) => {
        this.posts = posts;
        console.log("Posts fetched successfully");
      },
      error: (error) => {
        console.log("Error fetching posts: ", error);
      }
    }));
  }
}