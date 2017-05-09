import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpService } from '../services/http.service';

import { Global } from '../models/Global';
import { User, UserRegistrationModel, UserLoginModel } from '../models/User';

@Injectable()
export class AuthService {

    user: User;

    public authentification: any = {
        isAuth: true,
        userName: "",
        refreshToken: ""
    };

    constructor(private httpService: HttpService) { }

    Registration(userRegistrationData: UserRegistrationModel) : Observable<any>{
        return this.httpService.post(Global.apiServiceBaseUriL + 'api/users/register', userRegistrationData)
        .map((resp: Response) => {
            return resp;
        })
        .catch((error: any) => { return Observable.throw(error); })
    }

    Login(userLoginData: UserLoginModel) : Observable<any> {

        let body = "grant_type=password&username=" + userLoginData.UserName
            + "&password=" + userLoginData.Password
            + "&client_id=" + Global.clientId;

        let response = this.httpService.loginPost(Global.apiServiceBaseUriL + 'token', body)
            .map((resp: Response) => {
                this.authentification.isAuth = true;
                this.authentification.userName = userLoginData.UserName;
                return resp.json();
            })
            .catch((error: any) => { return Observable.throw(error); });

        return response;
    }

    RefreshToken() {
		let authData = JSON.parse(localStorage.getItem('authorizationData'));
        let body = "grant_type=password&username=" + authData.UserName
            + "&password=" + authData.Password
            + "&client_id=" + Global.clientId;

        let response = this.httpService.loginPost(Global.apiServiceBaseUriL + 'token', body)
            .map((resp: Response) => {
                return resp.json();
            }).subscribe((data) => {
                localStorage.setItem(
                    'authorizationData',
                    JSON.stringify(
                        {
                            token: data.access_token,
                            userName: data.userName,
                            refreshToken: data.refresh_token
                        }
                    )
                );
                this.authentification.isAuth = true;
                this.authentification.userName = data.userName;
            });
    }

    LogOut() {
        localStorage.removeItem("authorizationData");

        this.authentification.isAuth = false;
        this.authentification.userName = "";
        this.authentification.refreshToken = "";
    }

    FillAuthData() {
        let authData = JSON.parse(localStorage.getItem("authorizationData"));
        if (authData) {
            this.authentification.isAuth = true;
            this.authentification.userName = authData.userName;
            this.authentification.refreshToken = authData.refreshToken;
        }
    }

    getSomething() {
        let response = this.httpService.get(Global.apiServiceBaseUriL + 'api/users');
        console.log(response);
    }
}
