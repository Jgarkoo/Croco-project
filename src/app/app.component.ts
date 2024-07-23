import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsService } from './service/posts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'c-project';

  currentDateTime!: string;

  constructor(private service: PostsService) {}

  ngOnInit() {
    this.getCurrentDateTime();
  }

  getCurrentDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }

}
