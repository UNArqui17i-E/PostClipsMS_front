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
    let board_id  =  parseInt(localStorage.getItem("b_idShow"));

    this.postclipService.getPostclipByBoard( board_id ).subscribe(
          postclips => this.postclips = postclips,
          error => this.errorMessage= <any>error
        )
  }

  getPostclips(){
    this.postclipService.getPostclips().subscribe(
          postclips => this.postclips = postclips,
          error => this.errorMessage= <any>error
        )
  }

  goToShow(): void{
    let link = ['/proposal'];
    this.router.navigate(link);
  }
}
