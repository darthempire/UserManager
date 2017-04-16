import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { LogService } from '../services/log.service';
import { HttpClient } from '../helpers/HttpClient';

export class Item {
    id: number;
    product: string;
    price: number;
}

@Component({
    selector: 'app-root',
    templateUrl: '../templates/app/app.html',
    styleUrls: ['../templates/app/css/app.css'],
    providers: [HttpService, LogService, HttpClient]
})

@Injectable()
export class AppComponent {

    item: Item = new Item();

    constructor(private router: Router, private httpService: HttpService) { }

    sendSomething() {
		this.httpService.get('http://localhost:64183/api/values');
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
