import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  public info : any [];
  public comments : any;

  constructor(private route : ActivatedRoute, private postService : PostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const {params} = paramMap
      this.loadData(params.id);
    })
  }

  loadData(id : number) {
    this.postService.getPostComments(id)
    .subscribe(info => {
      this.comments = info;
    })
  }

}
