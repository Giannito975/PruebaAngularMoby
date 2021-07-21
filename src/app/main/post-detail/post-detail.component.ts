import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public id : any;
  public info : any;
  public post : any;
  public date : any;

  constructor(private route : ActivatedRoute, private postService : PostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap : any)=> {
      const {params} = paramMap
      this.loadData(params.id);
    })
  }

  loadData(id : number) {
    //alert(id);
    this.postService.getPostDetail(id)
    .subscribe(info => {
       this.post = info;
    })
  }

}
