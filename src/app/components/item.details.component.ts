import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'item-details',
    template: `<h3>Информация о товаре {{id}}</h3>`
})
export class ItemDetailsComponent {

    private querySubscription: Subscription;
    id: number;

    constructor(private activateRoute: ActivatedRoute, private router: Router) {
		this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.id = queryParam['id'];
            }
        );
    }

	ngOnDestroy() {
		this.querySubscription.unsubscribe();
	}
}
