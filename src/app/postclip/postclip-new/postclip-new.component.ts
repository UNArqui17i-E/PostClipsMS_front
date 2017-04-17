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
    private postclipService: PostclipService//,
    // private localStorage: LocalStorageService
  ){}

  ngOnInit( ){
    let timer = Observable.timer(0,5000);
    timer.subscribe(()=> this.boardService.getBoardsByUser( 1 ));//localStorage.getItem('id') ));
  }

  createPostclip(postclip : Postclip){
    this.submitted = true
    alert(postclip.name);
    // console.log("Entreeeeee");
    // this.postclip.name = " Test1111111";
    // this.postclip.description = "Desc 1";
    // this.postclip.contentLink = "google.com";
    postclip.board_id = 1;
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
