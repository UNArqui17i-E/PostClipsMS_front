import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'homepage',
  styleUrls: ['homepage.component.css'],
  templateUrl: 'homepage.component.html'
})
export class HomepageComponent  {
    returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { }

  register( ){
    var a = localStorage.getItem('id');
    if (a != null){
      return true;

    }else{
      return false;

    }

  }


      logout( ){
        this.authenticationService.logout( localStorage.getItem('token') )
            .subscribe(
                data => {
                    var str = String(data);
                    var n = str.search("200");
                    if( n != -1 ){
                      // remove user from local storage to log user out
                      localStorage.removeItem('token');
                      localStorage.removeItem('id');
                      this.router.navigate([this.returnUrl]);
                    }
                },
                error => {

                });
      }


}
