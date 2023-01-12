import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public items: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router // private get: RnmService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(({ response }) => {
      this.items = response;
    });
  }
}
