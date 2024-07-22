import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postURL: String;

  constructor(private http: HttpClient) {
    this.postURL = 'https://jsonplaceholder.typicode.com/';
  }

  getPost(): Observable<any>{
    return this.http.get<any>(`${this.postURL}/posts`);
  }
}
