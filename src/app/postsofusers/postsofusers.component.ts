import { Component, OnInit, Renderer2 } from '@angular/core';
import { PostsService } from '../service/posts.service';
import {  NgFor, NgIf } from '@angular/common';
import { posts } from '../interface/posts';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-postsofusers',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './postsofusers.component.html',
  styleUrl: './postsofusers.component.scss'
})
export class PostsofusersComponent implements OnInit{
  
  id: string | undefined ;
  selectedPost: posts | null = null;
  postArr: posts[] = [];

  constructor(private service: PostsService){
  }
  
  ngOnInit(): void {
    this.catchPost();
  }

  catchPost() {
    this.service.getPost().subscribe({
      next: (res: posts[]) => {
        this.postArr = res;
      },
      error: (err) => {
         console.log(err);
      }
    });
  }

  viewDetails(postId: number) {
    this.service.getSinglePost(postId).subscribe({
      next: (res: posts) => {
        this.selectedPost = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  closeDetails() {
    this.selectedPost = null;
  }


}
