import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: '../templates/app/app.html',
    styleUrls: ['../templates/app/css/app.css']
})

export class AppComponent {
    constructor(private router: Router){}
}
