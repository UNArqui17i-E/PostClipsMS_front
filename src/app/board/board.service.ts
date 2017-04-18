import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Board } from './board';


@Injectable()
export class BoardService {
  private boardUrl = 'http://192.168.99.102:5000/api/v1';

  constructor(
    private http: Http
  ) {}

  getBoards():Observable<Board[]>{
    return this.http.get(this.boardUrl + "/boards"  )
    .map((response: Response)=> <Board[]>response.json())
    .catch(this.handleError);
  }

  getBoard(id: number){
    return this.http.get(this.boardUrl + "/board?id=" + id )
  }
  getBoardsByUser(id: number){
    return this.http.get(this.boardUrl + "/boardsbyuser?id=" + id )
    .map((response: Response)=> <Board[]>response.json())
    .catch(this.handleError);
  }

  createBoard(board: Board): Observable<Board> {
    alert("Entro");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.boardUrl + "/board", JSON.stringify( board ),{headers: headers})
    .map( ( response: Response ) => response.json( ) );
  }

  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
