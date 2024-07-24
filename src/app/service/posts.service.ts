import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { posts } from '../interface/posts';
import { user } from '../interface/user';
import { todos } from '../interface/todo';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postURL: String;

  constructor(private http: HttpClient) {
    this.postURL = 'https://jsonplaceholder.typicode.com/';
  }

  getPost(): Observable<posts[]> {
    return this.http.get<posts[]>(`${this.postURL}/posts`);
  }

  getUser(): Observable<user[]> {
    return this.http.get<user[]>(`${this.postURL}/users`);
  } 

  getSinglePost(id: number): Observable<posts> {
    return this.http.get<posts>(`${this.postURL}/posts/${id}`);
  }

  getPostsByUserId(userId: number): Observable <posts[]>{
    return this.http.get<posts[]>(`${this.postURL}/posts?userId=${userId}`)
  }

  getSingleTodo(id: any): Observable<todos> {
    return this.http.get<todos>(`${this.postURL}/todos/${id}`);
  }
}
