import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../models/User';
import { LogService } from '../services/log.service';

@Injectable()
export class UserService {

    constructor(private logService: LogService, private http: Http) { }

    getPeoples() {
        this.logService.write("операция получения данных");
        return this.http.get('http://lord17-001-site1.ctempurl.com/api/users')
    }

    getUsers(): Observable<User[]> {

        this.logService.write("операция получения данных");

        return this.http.get('http://lord17-001-site1.ctempurl.com/api/orders')
            .map((resp: Response) => {

                let usersList = resp.json();
                let users: User[] = [];
                for (let index in usersList) {
                    console.log(usersList[index]);
                    let user = usersList[index];
                    users.push({ _userName: user.UserName, _id: user.Id });
                }
                return users;
            })
			.catch((error: any)=> {
				console.log(error);
				return Observable.throw(error);
			});
    }
}
