import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostclipService } from '../postclip.service';
import { Postclip } from '../postclip';
import { BoardService } from '../../board/board.service';
import { Board } from '../../board/board';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { AuthenticationService } from '../../_services/index';
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
    private router: Router,
    private authenticationService: AuthenticationService,
    private postclipService: PostclipService//,

    // private localStorage: LocalStorageService
  ){}

  ngOnInit( ){
    //let timer = Observable.timer(0,5000);
    //timer.subscribe(()=> this.boardService.getBoardsByUser( 1 ));//localStorage.getItem('id') ));
    this.authenticationService.validate( localStorage.getItem('token') )
    .subscribe(
      data2 => {
          alert(data2.valido);
          if (data2.valido == "false" ){

            this.router.navigate(['\login']);

          }


      });
  }

  @Input()
  board:Board;

  createPostclip(postclip : Postclip){
      this.submitted = true
      alert(localStorage.getItem("board_id"));
      postclip.board_id = parseInt(localStorage.getItem("board_id"));
      this.postclipService.createPostclip( postclip )
      .subscribe( data => {return true},
        error => this.errorMessage= <any>error
       )
     }


getBoards( id: number ){
    this.boardService.getBoardsByUser( 1 )
        .subscribe(
          boards => this.boards = boards,
          error => this.errorMessage= <any>error
        )
  }

}
