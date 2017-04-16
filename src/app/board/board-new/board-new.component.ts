import { Component, OnInit } from '@angular/core';
import { Board } from '../../board/board';
@Component({
  selector: 'app-board-new',
  templateUrl: './board-new.component.html',
  styleUrls: ['./board-new.component.css']
})
export class BoardNewComponent implements OnInit {
  board = new Board;
  constructor() { }

  ngOnInit() {
  }

}
