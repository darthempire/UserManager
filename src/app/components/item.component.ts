import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'item-info',
    template: `<h3>Модель {{id}}</h3>`
})
export class ItemComponent implements OnDestroy {
    id: number;
    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() { }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
