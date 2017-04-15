import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'item-desc',
	template: `
				<h3>Модель {{id}}</h3>
                <div>Товар: {{product}}</div>
                <div>Цена: {{price}}</div>`
})
export class ItemDescriptionComponent implements OnInit {

    private querySubscription: Subscription;

    id: number;
    private product: string;
    private price: string;

	constructor(private activateRoute: ActivatedRoute, private router: Router) {
        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: any) => {
				this.id = queryParam['id'];
                this.product = queryParam['product'];
                this.price = queryParam['price'];
            }
        );
    }

    ngOnInit() { }

	ngOnDestroy() {
        this.querySubscription.unsubscribe();
    }
}
