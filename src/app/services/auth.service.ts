import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HttpService } from '../services/http.service';

import { Global } from '../models/Global';
import { User, UserRegistrationModel, UserLoginModel } from '../models/User';

@Injectable()
export class AuthService {

    user: User;
    authentification: any = {
        isAuth: true,
        userName: ""
    };

    constructor(private httpService: HttpService) { }

    Registration(userRegistrationData: UserRegistrationModel) {
        return this.httpService.post(Global.apiServiceBaseUriL + 'api/users/register', userRegistrationData);
    }

    Login(userLoginData: UserLoginModel) {

        let body = "grant_type=password&username=" + userLoginData.UserName
            + "&password=" + userLoginData.Password
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
            });
    }

    getSomething() {
        let response = this.httpService.get(Global.apiServiceBaseUriL + 'api/values');
        console.log(response);
    }
}
