import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public postArray : Post[];
  public postArrayMinimized : any;

  constructor(private postService: PostService) {

    this.postService.getPost().subscribe((resp: any) => {
      console.log(resp)
      this.postArray = resp;
      this.postArrayMinimized = this.postArray.slice(0, 10);
    })

  }

  ngOnInit(): void {
  }

}



