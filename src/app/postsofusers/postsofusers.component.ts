import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { NgFor, NgIf } from '@angular/common';
import { posts } from '../interface/interface-user-post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postsofusers',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './postsofusers.component.html',
  styleUrl: './postsofusers.component.scss'
})
export class PostsofusersComponent implements OnInit{
  
  id: any
  post: any = {}
  postArr: posts[] = [];
  showPost: boolean = false;

  constructor(private service: PostsService, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id') || ' ';
  }
  
  ngOnInit(): void {
  this.catchPost();
  }

  catchPost() {
    this.service.getPost().subscribe({
      next: (res: any) => {
        this.postArr = res;
      },
      error: (err: any) => {
        console.error('Error fetching posts', err);
      }
    });
  }

  catchSinglePost(){
    this.service.getSinglePost(this.id).subscribe({next: (res) =>{
      this.post = res;
    },
    error: (err) =>{
      console.log(err);
      
    }
  })
  }

  viewCloseDetails() {
    this.showPost = !this.showPost;
    this.catchSinglePost();
  }

  
}
