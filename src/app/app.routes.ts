import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { PostsofusersComponent } from './postsofusers/postsofusers.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
   },
   {
    path: 'home',
    title: 'home page',
    component: HomeComponent
    },
    {
        path: 'users',
        title: 'users',
        component: UsersComponent
    },
    {
        path: 'posts',
        title: 'posts',
        component: PostsofusersComponent
    },
    {
        path: 'todo/:id',
        title: 'todo list',
        component: TodoComponent
    },
    {
        path: 'post/:userId',
        title: 'post',
        component: PostComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
