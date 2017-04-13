import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { LogService } from '../services/log.service';
import { UserService } from '../services/user.service';

import { User } from '../models/User';

@Component({
    selector: 'auth-comp',
    templateUrl: '../templates/auth/index.html',
    styleUrls: ['../templates/auth/css/master.css'],
    providers: [ UserService, LogService ]
})

export class AuthComponent {
    title: string;
    name: string = "Denchik";
    passwordHash: string;
    items: User[] = [];

    constructor(private userService: UserService) {}

	ngOnInit() {
		let dat = this.userService.getPeoples()
                        .subscribe((data: Response) => console.log(data.json()));
	}

    @Input() userName: string;

    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string) {
        this.userName = model;
        this.userNameChange.emit(model);
    }

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased) {
        this.onChanged.emit(increased);
    }
}
