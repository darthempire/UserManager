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
    selector: 'registration-cmp',
    moduleId: module.id,
    templateUrl: 'registration.component.html',
    providers: [HttpService, LogService, HttpClient, AuthService]
})

export class RegistrationComponent{
    login: string = "";
    password: string = "";
    confirmPassword: string = "";
    email: string = "";
    name: string = "";
    surname: string = "";
    info: string = "";

    constructor(private router: Router, private httpService: HttpService, private authService: AuthService) { }

    Register() {
        console.log(123);
        if(this.password == "" || this.login == "" || this.email == "") {
            console.log(1113);
            this.showNotification('bottom','center', 'info', "Не все обязательные поля заполненыы");
        }


        if(this.password != this.confirmPassword) {
            this.showNotification('bottom','center', 'danger', "Пароли не совпадают");
            this.confirmPassword = "";
            this.password = "";
        }

        let userRegistrationData = new UserRegistrationModel();
        userRegistrationData.UserName = this.login;
        userRegistrationData.Password = this.password;
        userRegistrationData.ConfirmPassword = this.confirmPassword;
        userRegistrationData.Name = this.name;
        userRegistrationData.Surname = this.surname;
        userRegistrationData.Email = this.email;
        userRegistrationData.Information = this.info;

        this.authService.Registration(userRegistrationData)
        .subscribe(
            (data) => {
                this.showNotification('bottom','center', 'success', "Вы успешно зарегистрировались. Войдите в систему.");
                this.router.navigate(['/login']);
            },
            (error) => {
                this.showNotification('bottom','center', 'danger', "Дико извиняемся. Произошла ошибка...");
                console.log(error);
            }
        );


        //this.authService.getSomething();
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
