import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink, HttpClientModule, NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  

  constructor() {}

  ngOnInit() {
  }

  
}
