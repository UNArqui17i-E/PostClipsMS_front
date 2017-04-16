import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {RequestOptions, Http, Request, RequestMethod} from '@angular/http';

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
    private userLoginUrl = 'http://192.168.99.102:4000/user/resources/authentication/';
    private userCreateUrl = 'http://192.168.99.102:4000/user/resources/users/';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private http: Http
    ) { }

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

        let token = this.loginMS( this.model.email, this.model.password )
        if ( token == "Usuario invalido" ){

        }else{
          if (typeof(Storage) !== "undefined") {
              localStorage.setItem("email", this.model.email);
              localStorage.setItem("token", token);
          } else {
              document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage!";
          }
        }
    }

    loginMS(email: string, password: string): string{

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let json= '{"name":"' + name + '","password":"' + password + '"}' ;

        return this.http.post( this.userLoginUrl, json, options );
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

        let json = '{"name":"' + this.model1.firstName +
          '", "nick":"' + this.model1.lastName +
          '", "email":"' + this.model1.username +
          '", "password":"' + this.model1.password + '"}';
        this.createUser( json );
    }

    createUser( json: string ){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post( this.userLoginUrl, json, options );
    }

}
