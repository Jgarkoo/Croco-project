import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ErrorComponent } from './error/error.component';

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
        path: '**',
        component: ErrorComponent
    }
];
