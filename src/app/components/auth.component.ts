import { Component } from '@angular/core';

@Component({
  selector: 'auth-comp',
  templateUrl: '../templates/auth/index.html',

})

export class AuthComponent {
  title: string;
  name: string;
  passwordHash: string;
}
