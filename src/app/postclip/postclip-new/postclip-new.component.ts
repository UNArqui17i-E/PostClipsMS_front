import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { PostclipService } from '../postclip.service';
import { Postclip } from '../postclip';
import { BoardService } from '../../board/board.service';
import { Board } from '../../board/board';
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

  constructor(
    private boardService: BoardService,
    private postclipService: PostclipService
  ){}

  ngOnInit( ){
    // let timer = Observable.timer(0,5000);
    // var id = +localStorage.getItem("id");
    // timer.subscribe(
    //   ()=> this.boardService.getBoardsByUser( id )
    //          .subscribe(
    //             data => {
    //                 this.boards = <Board[]>data;
    //             }
    //          )
    // );
  }

  createPostclip(postclip : Postclip){
    this.submitted = true
    // alert( typeof(postclip.name) === "undefined" );
    // alert( typeof(postclip.description) === "undefined" );
    // alert( typeof(postclip.contentLink) === "undefined" );
    // postclip.board_id = 1;
    if( typeof(postclip.name) === "undefined" || typeof(postclip.description) === "undefined"
        || typeof(postclip.description) === "undefined" || typeof(postclip.contentLink) === "undefined"
        || typeof(postclip.board_id) === "undefined"){
      (<HTMLInputElement>document.getElementById("alert")).setAttribute( "style", "display:block!important" );
      alert( "You have one o more empty fields" );
    }else{
      postclip.board_id = +localStorage.getItem("board_id");
      this.postclipService.createPostclip( postclip )
      .subscribe(
        data => {
          var str = String(data);
          var n = str.search("201");
          if( n != -1 ){
            (<HTMLInputElement>document.getElementById("sumb")).setAttribute( "style", "display:block!important" );
          }
        }, error =>{
          console.log("Error saving postclip");
          return Observable.throw(error);
        }
      );
    }
  }
}
