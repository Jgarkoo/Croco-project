import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { posts } from '../interface/posts';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink, HttpClientModule, NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  userId: any;
  postArr: posts[] = [];

  constructor(private service: PostsService, private route: ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('userId') || ' ';
  }
  
  ngOnInit(): void {
    this.fetchSinglepostByUserId();
  }

  fetchSinglepostByUserId(){
    this.service.getPostsByUserId(this.userId).subscribe({next: (res: posts[]) =>{
      this.postArr = res;
    },
    error: (err) =>{
      console.log(err);
      
    }
  })
  }
  
}
