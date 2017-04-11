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

	@Input() userName: string;

	@Output() userNameChange  = new EventEmitter<string>();
	onNameChange(model: string) {
		this.userName = model;
		this.userNameChange.emit(model);
	}

	@Output() onChanged = new EventEmitter<boolean>();
	change(increased) {
		this.onChanged.emit(increased);
	}
}
