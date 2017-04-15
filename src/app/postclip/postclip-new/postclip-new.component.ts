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

  constructor(
    private boardsService: BoardService,
    private router: Router,
    private localStorage: LocalStorageService
  ){}

  ngOnInit( ){
    let timer = Observable.timer(0,5000);
    timer.subscribe(()=> this.getBoards( localStorage.getItem('id') ));
  }

  getBoards( id: number ){
    this.boardsService.getBoardsByUser( id )
        .subscribe(
          boards => this.boards = boards,
          error => this.errorMessage= <any>error
        )
  }

  createClip(postclip: Postclip){
    PostclipService.createPostclip( postclip );
  }


}
