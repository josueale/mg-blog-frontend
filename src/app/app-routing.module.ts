import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetAllPostService } from './services/post/get-all-post.service';
import { GetPostService } from './services/post/get-post.service';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    resolve: {
      response: GetAllPostService,
    },
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  // posts
  { path: 'post', redirectTo: '/', pathMatch: 'full' },

  {
    path: 'post/:postId',
    resolve: {
      response: GetPostService,
    },
    loadChildren: () =>
      import('./pages/post/post-detail/post-detail.module').then(
        (m) => m.PostDetailModule
      ),
  },

  // users

  {
    // auth protected?
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
  },

  //
  {
    path: 'auth/register',
    loadChildren: () =>
      import('./pages/auth/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  //
  {
    path: 'auth/login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
