import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { API } from 'src/app/environments/environments';
import { Post } from 'src/app/types/post';

@Injectable({
  providedIn: 'root',
})
export class GetPostService implements Resolve<Post> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    const id = route.params['postId'];

    return this.http.get<Post>(API + '/api/v1/posts/' + id);
  }
}
