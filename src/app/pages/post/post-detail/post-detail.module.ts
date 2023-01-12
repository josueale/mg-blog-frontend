import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostDetailRoutingModule } from './post-detail-routing.module';

import { CommentListComponent } from 'src/app/components/comment-list/comment-list.component';
import { CommentListModule } from 'src/app/components/comment-list/comment-list.module';

@NgModule({
  declarations: [
    CommentListComponent,
  ],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    CommentListModule,
  ]
})
export class PostDetailModule { }
