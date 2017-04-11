import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: '../templates/app/app.html',
    styleUrls: ['../templates/app/css/master.css']
})
export class AppComponent {
    name: string = "Vasya";
	count: number = 0;

	onChanged(increased) {
		increased == true ? this.count++ : this.count--;
	}
}
