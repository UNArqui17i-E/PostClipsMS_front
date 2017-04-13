import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'login',
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    model: any = {};
    model1: any = {};
    loading = false;
    loading1 = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(
            data1 => {
                if( data1.login == "True" ){
                  this.router.navigate([this.returnUrl]);
                }else{
                    var divL = document.getElementById('avisoLogin');
                    divL.style.display= 'block' ;
                }
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });

        /*if ( a == true ){

            this.router.navigate(["\home"]);

        }else{

          var divL = document.getElementById('avisoLogin');
          divL.style.display= 'block' ;

        }*/

    }

    register() {
        this.loading1 = true;
        this.authenticationService.create(this.model1.firstName, this.model1.lastName, this.model1.username, this.model1.password )
            .subscribe(
                data => {
                    var str = String(data);
                    var n = str.search("201");
                    var div = document.getElementById('aviso');
                    var div1 = document.getElementById('aviso1');
                    if( n != -1 ){

                      div1.style.display= 'none' ;
                      div.style.display= 'block' ;

                    }else{

                      div.style.display= 'none' ;
                      div1.style.display= 'block' ;

                    }
                    this.loading1 = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading1 = false;
                });
    }

}
