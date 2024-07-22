import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  currentDateTime!: string;
  postArr: any[] = [];

  constructor(private service: PostsService) {}

  ngOnInit() {
    this.getCurrentDateTime();
    this.catchPost(); 
  }

  getCurrentDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
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
}
