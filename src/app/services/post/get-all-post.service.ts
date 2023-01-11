import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { API } from 'src/app/environments/environments';
import { Post } from 'src/app/types/post';

@Injectable({
  providedIn: 'root',
})
export class GetAllPostService implements Resolve<Post[]> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API}/api/v1/posts`);
  }
}
