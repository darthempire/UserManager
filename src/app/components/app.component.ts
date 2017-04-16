import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '../helpers/HttpClient';
import { Injectable } from '@angular/core';

export class Item {

    id: number;
    product: string;
    price: number;
}

@Component({
    selector: 'app-root',
    templateUrl: '../templates/app/app.html',
    styleUrls: ['../templates/app/css/app.css'],
    providers: [HttpClient]
})

@Injectable()
export class AppComponent {

    item: Item = new Item();

    constructor(private router: Router, private http: HttpClient) { }

    sendSomething() {
        this.http.get("http://localhost:64183/api/values").subscribe(result => {
            console.log( result );
        });
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
