import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Injectable } from '@angular/core';

import { HttpService } from '../../app.common/services/http.service';
import { LogService } from '../../app.common/services/log.service';
import { UserService } from '../../app.common/services/user.service';

import { HttpClient } from '../../app.common/helpers/HttpClient';

import { User } from '../../app.common/models/User';
import { Role } from '../../app.common/models/Role';


declare var $:any;

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    providers: [HttpService, LogService, HttpClient, UserService]
})

export class UserComponent implements OnInit{
    private subscription: Subscription;
    private querySubscription: Subscription;

    id: number = 1;
    userName: string;
    user: User = new User();

    constructor(private activateRoute: ActivatedRoute, private router: Router, private httpService: HttpService, private userService: UserService) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.id = queryParam['id'];
            }
        );
    }

    ngOnInit(){
        this.UpdateUser(1);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.querySubscription.unsubscribe();
    }


    private UpdateUser(id: number) {
        this.userService.getUser(id)
        .subscribe(
            (data) => {
                this.user = data;
                console.log(this.user);
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
