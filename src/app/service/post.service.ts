import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //Endpoint of all the posts.
  url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
  }

  //Get all posts
  public getPost() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
    return this.http.get(this.url, {
      headers: header
    });
  }

  //Method to implement wherever it is needed.
  public getUrl(url : string){
    return this.http.get(url);
  }

}
