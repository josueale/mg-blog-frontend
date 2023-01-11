import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllPostService } from './services/post/get-all-post.service';

const routes: Routes = [
  {
    path: '',
    resolve: {
      response: GetAllPostService,
    },
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'post',
    redirectTo:'/',
    pathMatch:'full'
  },

  {
    path:'post/:postId',
    loadChildren: () => import('./pages/post/post-detail/post-detail.module').then(m => m.PostDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
