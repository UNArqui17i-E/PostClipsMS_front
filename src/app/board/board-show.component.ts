import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params,} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Board } from './board';
import { BoardService} from './board.service';
import { Router } from '@angular/router';


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
    private http: Http,
    private router: Router
  ){}

  @Input()
  board:Board;

  ngOnInit(): void{
    let boardRequest = this.route.params
      .flatMap((params:Params)=>
        this.boardService.getBoard(+params['id']));
    boardRequest.subscribe(response => this.board = response.json());
  }
  goToCreatePostclip(board:Board){
    // alert(board.id);
    localStorage.setItem("board_id", board.id.toString());

    alert(  localStorage.getItem("board_id"))
    let link = ['/postclip/new'];
    this.router.navigate(link);
  }


}
