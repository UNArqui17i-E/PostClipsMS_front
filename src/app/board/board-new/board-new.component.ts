import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { AuthenticationService } from '../../_services/index';
import { ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-board-new',
  templateUrl: './board-new.component.html',
  styleUrls: ['./board-new.component.css']
})
export class BoardNewComponent implements OnInit {
  board = new Board;
  constructor(
    private boardService: BoardService,
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  ngOnInit() {

    this.authenticationService.validate( localStorage.getItem('token') )
    .subscribe(
      data2 => {
          alert(data2.valido);
          if (data2.valido == "false" ){

            this.router.navigate(['\login']);

          }


      });

  }

  createBoard(board: Board){
    alert("Entro2");
    board.user = 1;
    this.boardService.createBoard( board )
    .subscribe(
      data2 => {
          if (data2.id != "false" ){

            this.router.navigate(['\wall']);

          }


      });

  }

}
