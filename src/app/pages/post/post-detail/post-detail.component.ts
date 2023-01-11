import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post = {
    _id: '',
    comments_id: [],
    content: '',
    createdAt: '',
    title: '',
    updatedAt: '',
    user_id: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ response }) => {
      this.post = response;
    });
  }
}
