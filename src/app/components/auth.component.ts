import { Input, Component } from '@angular/core';

@Component({
    selector: 'auth-comp',
    templateUrl: '../templates/auth/index.html',
	styleUrls: ['../templates/auth/css/master.css']
})

export class AuthComponent {
    title: string;
    name: string = "Denchik";
    passwordHash: string;

	@Input()
	set userName(theName: string) {
		this.name = theName + "QQ";
	}
}
