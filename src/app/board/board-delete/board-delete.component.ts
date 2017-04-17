import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-delete',
  templateUrl: './board-delete.component.html',
  styleUrls: ['./board-delete.component.css']
})

export class BoardDeleteComponent implements OnInit {
  board = new Board;

  constructor(
    private boardService: BoardService
  ){}

  ngOnInit() {
  }

  deleteBoard(board: Board){
    this.boardService.deleteBoard( board.id );
  }

}
