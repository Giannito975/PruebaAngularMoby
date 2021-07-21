import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //Endpoint of all the posts.
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  postDetailUrl = '';
  commentsUrl = '';

  constructor(private http: HttpClient) {
  }

  //Get all posts
  public getPost() : Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
    return this.http.get(this.postsUrl, {
      headers: header
    });
  }

  //Get post detail
  public getPostDetail(id : number) : Observable<any>{
    return this.http.get(this.postDetailUrl + id);
  }

  public getPostComments(id : number) : Observable<any>{
    return this.http.get(this.commentsUrl + id);
  }

}
