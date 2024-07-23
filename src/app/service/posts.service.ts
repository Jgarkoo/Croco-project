import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { posts, user } from '../interface/interface-user-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postURL: String;

  constructor(private http: HttpClient) {
    this.postURL = 'https://jsonplaceholder.typicode.com/';
  }

  getPost(): Observable<posts[]>{
    return this.http.get<posts[]>(`${this.postURL}/posts`);
  }

  getUser(): Observable<user[]>{
    return this.http.get<user[]>(`${this.postURL}/users`);
  }

  getSinglePost(id: string): Observable<posts[]> {
    return this.http.get<posts[]>(`${this.postURL}/posts/${id}`)
  }

  getTodo(): Observable<any>{
    return this.http.get<any>(`${this.postURL}/todos`)
  }
}
