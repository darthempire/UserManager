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
        this.http.get(url).subscribe((data: Response) => {
            if (data.status == 200) {
				//if 401 => /unauthorize
				localStorage.setItem('status', data.status.toString());
                this.router.navigate(['/item']);
            }
            console.log(data.status);
        });
    }
}
