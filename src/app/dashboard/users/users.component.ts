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
        this.userService.getUsers()
        .subscribe(
            (data) => { this.users = data; console.log(this.users); },
            (error) => {
                console.log(error);
            }
        );
    }
}
