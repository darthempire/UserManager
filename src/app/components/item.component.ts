import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'item-info',
    template: `
				<a (click)="goDetails()">Информация о товаре</a> |
				<a (click)="goStatistic()">Статистика товара</a>|
				<a (click)="goDescription()">описание товара</a>

				<router-outlet></router-outlet>`
})
export class ItemComponent implements OnDestroy, OnInit {

    private subscription: Subscription;
    private querySubscription: Subscription;

    id: number;
    private product: string;
    private price: string;

    constructor(private activateRoute: ActivatedRoute, private router: Router) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.product = queryParam['product'];
                this.price = queryParam['price'];
            }
        );
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.querySubscription.unsubscribe();
    }

    goStatistic() {
        this.router.navigate(['/item/' + this.id + '/stat'],
            {
                queryParams: {
                    'product': this.product,
                    'price': this.price
                }
            });
    }

    goDetails() {
        this.router.navigate(['/item/' + this.id + '/details'],
            {
                queryParams: {
					'id': this.id,
                    'product': this.product,
                    'price': this.price
                }
            });
    }

    goDescription() {
        this.router.navigate(
            ['item/' + this.id + '/descr'],
            {
                queryParams: {
                    'id': this.id,
                    'product': this.product,
                    'price': this.price
                }
            }
        );
    }
}
