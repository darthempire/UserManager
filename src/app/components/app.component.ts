import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpService } from '../services/http.service';
import { LogService } from '../services/log.service';
import { AuthService } from '../services/auth.service';

import { HttpClient } from '../helpers/HttpClient';

import { UserRegistrationModel, UserLoginModel } from '../models/User';

export class Item {
    id: number;
    product: string;
    price: number;
}

@Component({
    selector: 'app-root',
    templateUrl: '../templates/app/app.html',
    styleUrls: ['../templates/app/css/app.css'],
    providers: [HttpService, LogService, HttpClient, AuthService]
})

@Injectable()
export class AppComponent {

    item: Item = new Item();

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

    goToItem(myItem: Item) {

        this.router.navigate(
            ['/item', myItem.id],
            {
                queryParams: {
                    'product': myItem.product,
                    'price': myItem.price
                }
            }
        );
    }
}
