import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'comment-item',
  templateUrl: './comment.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class CommentComponent {}
