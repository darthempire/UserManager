import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpService } from '../../app.common/services/http.service';
import { LogService } from '../../app.common/services/log.service';
import { UserService } from '../../app.common/services/user.service';

import { HttpClient } from '../../app.common/helpers/HttpClient';

import { User } from '../../app.common/models/User';
import { Role } from '../../app.common/models/Role';


declare var $:any;

@Component({
    selector: 'users-cmp',
    moduleId: module.id,
    templateUrl: 'users.component.html',
    providers: [HttpService, LogService, HttpClient, UserService]
})

export class UsersComponent {
    users: User[] = [];
    constructor(private router: Router, private httpService: HttpService, private userService: UserService) { }

    ngOnInit(){
        this.UpdateUsers();
    }

    public DeleteUser(userId: number) {
        this.userService.deleteUser(userId)
        .subscribe(
            (data) => {
                console.log(data);
                this.showNotification('bottom','center', 'success', "Пользователь успешно удален.");
                this.UpdateUsers();
            },
            (error) => {
                this.showNotification('bottom','center', 'danger', "Дико извиняемся. Произошла ошибка...");
                this.UpdateUsers();
                console.log(error);
            }
        );
    }

    private UpdateUsers() {
        this.userService.getUsers()
        .subscribe(
            (data) => { this.users = data; console.log(this.users); },
            (error) => {
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
