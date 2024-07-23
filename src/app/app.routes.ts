import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { PostsofusersComponent } from './postsofusers/postsofusers.component';

export const routes: Routes = [
   {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
   },
   {
    path: 'home',
    title: 'home page',
    component: PostComponent
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
        path: '**',
        component: ErrorComponent
    }
];
