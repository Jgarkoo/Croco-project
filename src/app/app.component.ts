import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsService } from './service/posts.service';
import { PostComponent } from "./post/post.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, HomeComponent, FooterComponent, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'c-project';
}
