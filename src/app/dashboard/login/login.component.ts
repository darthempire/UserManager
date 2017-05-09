import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpService } from '../../app.common/services/http.service';
import { LogService } from '../../app.common/services/log.service';
import { AuthService } from '../../app.common/services/auth.service';

import { HttpClient } from '../../app.common/helpers/HttpClient';

import { UserRegistrationModel, UserLoginModel } from '../../app.common/models/User';

@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [HttpService, LogService, HttpClient, AuthService]
})

export class LoginComponent{
    constructor(private router: Router, private httpService: HttpService, private authService: AuthService) { }

    Login() {
        let userloginData = new UserLoginModel();
        userloginData.UserName = "Vasya";
        userloginData.Password = "123456";

        let userRegistrationData = new UserRegistrationModel();
        userRegistrationData.UserName = "name";
        userRegistrationData.Password = "123456";
        userRegistrationData.ConfirmPassword = "123456";
        
        //this.authService.Registration(userRegistrationData);
        this.authService.Login(userloginData);
        //this.authService.getSomething();
    }
}
