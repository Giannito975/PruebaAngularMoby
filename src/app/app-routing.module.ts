import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorViewComponent } from './main/error-view/error-view.component';
import { PostDetailComponent } from './main/post-detail/post-detail.component';
import { PostListComponent } from './main/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: '', component: PostListComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
  {
    path: '404',
    component: ErrorViewComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
