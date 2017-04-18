import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostclipService } from '../postclip.service';
import { Postclip } from '../postclip';
import { BoardService } from '../../board/board.service';
import { Board } from '../../board/board';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
// import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-postclip-new',
  templateUrl: './postclip-new.component.html',
  styleUrls: ['./postclip-new.component.css']
})
export class PostclipNewComponent implements OnInit {

  boards: Board[];
  errorMessage: string;
  postclip = new Postclip;
  submitted: boolean = false;
  routeId : number;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private http: Http,
    private postclipService: PostclipService//,
    // private localStorage: LocalStorageService
  ){}

  ngOnInit( ){
    let timer = Observable.timer(0,5000);
    timer.subscribe(()=> this.boardService.getBoardsByUser( 1 ));//localStorage.getItem('id') ));
  }

  @Input()
  board:Board;

  createPostclip(postclip : Postclip){
    this.submitted = true
    //alert(this.board.id);
    alert(localStorage.getItem("board_id"));
    postclip.board_id = parseInt(localStorage.getItem("board_id"));
    this.postclipService.createPostclip( postclip )
    .subscribe(
      data => {return true},
      error =>{
        console.log("Error saving postclip");
        return Observable.throw(error);
      }
  );
  }

  getBoards( id: number ){
    this.boardService.getBoardsByUser( 1 )
        .subscribe(
          boards => this.boards = boards,
          error => this.errorMessage= <any>error
        )
  }

}
