import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Postclip } from './postclip';

@Injectable()
export class PostclipService {
  private postclipUrl = 'http://192.168.99.101:3000/api/v1/post_clips';

  constructor(
    private http: Http
  ) {}

  getPostclips():Observable<Postclip[]>{
    return this.http.get(this.postclipUrl)
    .map((response: Response)=> <Postclip[]>response.json())
    .catch(this.handleError);
  }

  getPostclip(id: number){
    return this.http.get(this.postclipUrl + "/" + id + ".json")
  }
  
  getPostclipByBoard(id: number){
    return this.http.get(this.postclipUrl + "/clips_by_board/" + id)
    .map((response: Response)=> <Postclip[]>response.json())
    .catch(this.handleError);
  }

  createPostclip(postclip: Postclip) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("Entro")
    return this.http.post(this.postclipUrl, JSON.stringify( postclip ),{headers: headers})
    .map( ( response: Response ) => response.json( ) ).catch(this.handleError);
  }
   
   deletePostClip(id: number) {        
		return this.http.delete(this.postclipUrl + "/" + id)
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
