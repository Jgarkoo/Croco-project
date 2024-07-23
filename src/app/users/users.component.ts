import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { NgFor } from '@angular/common';
import { user } from '../interface/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  
  userArr: user[] = [];
  filteredUsers: user[] = [];

  constructor(private service: PostsService){}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.service.getUser().subscribe({next: (res) =>{
      this.userArr = res;
      this.filteredUsers = res;
    }})
  }

  search(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.filteredUsers = this.userArr.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.username.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    );
  }

}
