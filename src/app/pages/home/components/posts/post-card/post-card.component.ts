import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() date!: string;
  @Input() id!: string;
}
