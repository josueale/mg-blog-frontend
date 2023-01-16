import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { FormCommentComponent } from './form-comment/form-comment.component';

interface Comment {
  user_id: string;
  date: string;
}

interface PostComment {
  _id: string;
  comments: Comment[];
}

@Component({
  selector: 'item-comments',
  standalone: true,
  imports: [CommonModule, CommentComponent, FormCommentComponent],
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  @Input() id: string = '_';

  public value: PostComment = {
    _id: this.id,
    comments: [],
  };

  ngOnInit() {
    console.log(this.id);
  }
}
