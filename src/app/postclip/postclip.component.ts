import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Postclip } from './postclip';
import { PostclipService } from './postclip.service';

@Component({
  moduleId: module.id,
  selector: 'app-postclip',
  templateUrl: './postclip.component.html',
  styleUrls: ['./postclip.component.css'],
  providers:[ PostclipService ]
})

export class PostclipComponent implements OnInit {
  postclips: Postclip[];
  errorMessage: string;
  mode = "Observable";
  constructor(
    private postclipService: PostclipService,
    private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0,10000);
    timer.subscribe(()=> this.getPostclips());
  }

  getPostclips(){
    this.postclipService.getPostclips().subscribe(
          postclips => this.postclips = postclips,
          error => this.errorMessage= <any>error
        )
  }
  
  deletePostClip(id: number){
	this.postclipService.deletePostClip(id)
  }

  goToShow(): void{
    let link = ['/proposal'];
    this.router.navigate(link);
  }
}
