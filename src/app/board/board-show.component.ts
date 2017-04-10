import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params,} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Board } from './board';
import { BoardService} from './board.service';


@Component({
  moduleId: module.id,
  selector: 'board-show',
  templateUrl: './board-show.component.html',
  styleUrls: ['./board-show.component.css']
})
export class BoardShowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private http: Http
  ){}

  @Input()
  board:Board;

  ngOnInit(): void{
    let boardRequest = this.route.params
      .flatMap((params:Params)=>
        this.boardService.getBoard(+params['id']));
    boardRequest.subscribe(response => this.board = response.json());
  }

}
