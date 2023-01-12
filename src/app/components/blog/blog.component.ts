import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() date!: string;
  @Input() id!: string;
}
