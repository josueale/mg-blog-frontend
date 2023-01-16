import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommentsComponent } from 'src/app/shared/components/comments/comments.component';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './post-detail.component';

@NgModule({
  declarations: [PostDetailComponent],
  imports: [CommonModule, PostDetailRoutingModule, CommentsComponent],
})
export class PostDetailModule {}
