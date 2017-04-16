import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
@Component({
  selector: 'app-board-new',
  templateUrl: './board-new.component.html',
  styleUrls: ['./board-new.component.css']
})
export class BoardNewComponent implements OnInit {
  board = new Board;
  constructor(
    private boardService: BoardService
  ){}

  ngOnInit() {
  }

  createBoard(board: Board){
    this.boardService.createBoard( board );
  }

}
