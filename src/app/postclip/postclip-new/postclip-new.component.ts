import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { PostclipService } from '../postclip.service';
import { Postclip } from '../postclip';
import { BoardService } from '../../board/board.service';
import { Board } from '../../board/board';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-postclip-new',
  templateUrl: './postclip-new.component.html',
  styleUrls: ['./postclip-new.component.css']
})
export class PostclipNewComponent implements OnInit {

  boards: Board[];
  errorMessage: string;

  constructor(
    private boardService: BoardService,
    private postclipService: PostclipService,
    private localStorage: LocalStorageService
  ){}

  ngOnInit( ){
    let timer = Observable.timer(0,5000);
    timer.subscribe(()=> this.getBoards( localStorage.getItem('id') ));
  }

  createClip(postclip: Postclip){
    this.postclipService.createPostclip( postclip );
  }

  getBoards( id: number ){
    this.boardService.getBoardsByUser( id )
        .subscribe(
          boards => this.boards = boards,
          error => this.errorMessage= <any>error
        )
  }

}
