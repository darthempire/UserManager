import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpService } from '../services/http.service';


import { User } from '../models/User';
import { LogService } from '../services/log.service';

@Injectable()
export class UserService {

    constructor(private httpService: HttpService) { }

    getUsers(): Observable<User[]> {

        return this.httpService.get('http://lord17-001-site1.ctempurl.com/api/users')
            .map((resp: Response) => {

                let usersList = resp.json();
                let users: User[] = [];
                for (let index in usersList) {
                    let user = usersList[index];
                    users.push(user);
                }
                return users;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    // postData(obj: User) {
    //     const body = JSON.stringify(obj);
    //     console.log(body);
    //     let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    //
    //     return this.httpService.post('http://localhost:64183/api/values/', body, { headers: headers })
    //         .map((resp: Response) => resp.json())
    //         .catch((error: any) => { return Observable.throw(error); });
    // }
    //
    // sendParameters() {
    //
    //     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //     var params = new URLSearchParams();
    //     params.set('userName', "username");
    //     params.set('id', "2");
	// 	console.log(params.toString());
    //     return this.httpService.post('http://localhost:64183/api/values/', params.toString(), { headers: headers })
    //         .map(res => res.json())
    //         .catch((error: any) => { return Observable.throw(error); });;
    // }
}
