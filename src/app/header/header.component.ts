import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  currentDateTime!: string;

  ngOnInit() {
    this.getCurrentDateTime();
  }

  getCurrentDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }
}
