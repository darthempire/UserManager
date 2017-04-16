import { Injectable } from '@angular/core';

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

		let data = "grant_type=password&username=" + userLoginData.UserName
				 + "&password=" + userLoginData.Password
				 + "&client_id=" + Global.clientId;
		console.log(data);
		let response = this.httpService.post(Global.apiServiceBaseUriL + 'token', data);
		console.log(response);
	}

	getSomething() {
		let response = this.httpService.get(Global.apiServiceBaseUriL + 'api/values');
		console.log(response);
	}
}
