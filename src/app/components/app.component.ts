import { Component } from '@angular/core';
import { Router} from '@angular/router';

export class Item{
    id: number;
    product: string;
    price: number;
}

@Component({
    selector: 'app-root',
    templateUrl: '../templates/app/app.html',
    styleUrls: ['../templates/app/css/master.css']
})

export class AppComponent {

	item: Item=new Item();

    constructor(private router: Router){}

	goToItem(myItem: Item){

        this.router.navigate(
            ['/item', myItem.id],
            {
                queryParams:{
                    'product': myItem.product,
                    'price': myItem.price
                }
            }
        );
    }
}
