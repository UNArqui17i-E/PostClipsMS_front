import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BoardService } from '../board/board.service';
import { Board } from '../board/board';


@Component({
  moduleId: module.id,
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  boards: Board[];
  errorMessage: string;
  mode = "Observable";
  constructor(
    private boardsService: BoardService,
    private router: Router
  ){}
  ngOnInit(){
    let timer = Observable.timer(0,5000);
    timer.subscribe(()=> this.getBoards());
  }
  getBoards(){
    this.boardsService.getBoards()
        .subscribe(
          boards => this.boards = boards,
          error => this.errorMessage= <any>error
        )
  }
  goToBoard(board:Board): void{
    localStorage.setItem("b_idShow", board.id.toString());
    let link = [board.id,'postclips'];
    this.router.navigate(link);
  }

}
