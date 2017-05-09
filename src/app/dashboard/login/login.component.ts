import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpService } from '../../app.common/services/http.service';
import { LogService } from '../../app.common/services/log.service';
import { AuthService } from '../../app.common/services/auth.service';

import { HttpClient } from '../../app.common/helpers/HttpClient';

import { UserRegistrationModel, UserLoginModel } from '../../app.common/models/User';

declare var $:any;

@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [HttpService, LogService, HttpClient, AuthService]
})

export class LoginComponent {
    login: string;
    password: string;
    constructor(private router: Router, private httpService: HttpService, private authService: AuthService) { }

    Login() {

        let userloginData = new UserLoginModel();
        userloginData.UserName = this.login;
        userloginData.Password = this.password;

        this.authService.Login(userloginData)
        .subscribe(
            (data) => {
                console.log(12);
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
                this.showNotification('bottom','center', 'success', "Вы успешно вошли в систему. Подождите...");
                this.router.navigate(['/dashboard']);

            },
            (error) => {
                this.showNotification('bottom','center', 'danger', "Логин или пароль не верный");
                this.login = "";
                this.password = "";
                console.log(error);
            }
        );
    }

    private showNotification (from, align, color, message){
        var type = ['','info','success','warning','danger'];

        $.notify({
            icon: "notifications",
            message: message

        },{
            type: color,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}
