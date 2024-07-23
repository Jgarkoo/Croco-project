import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { todos } from '../interface/todo';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  
  id: string;
  todoList: todos | null = null;
  todo: any = {};


  constructor(private service: PostsService, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id') || ' ';
  }
  
  ngOnInit(): void {
    this.fetchSingleTodo();
  }

  fetchSingleTodo(){
    this.service.getSingleTodo(this.id).subscribe({next: (res: todos) =>{
      this.todo = res;
    },
    error: (err) =>{
      console.log(err);
      
    }
  })
  }
}
