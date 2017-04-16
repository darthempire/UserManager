import { Injectable, OnInit } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient } from '../helpers/HttpClient';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../models/User';
import { LogService } from '../services/log.service';

@Injectable()
export class HttpService {

    constructor(private router: Router, private logService: LogService, private http: HttpClient) { }

    get(url) {
        this.http.get(url).subscribe((response: Response) => {
            console.log(response);
        });
    }

	post(url, data) {
		data = JSON.stringify(data);
		console.log(data);
		this.http.post(url, data).subscribe((response: Response) => {
			console.log(response);
		});
	}
}
