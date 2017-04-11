import { Component, Input, Output, EventEmitter } from '@angular/core';

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

	@Output() onChanged = new EventEmitter<boolean>();
	change(increased) {
		this.onChanged.emit(increased);
	}
}
