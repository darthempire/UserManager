import { Component } from '@angular/core';

@Component({
    selector: 'auth-cmp',
    moduleId: module.id,
    templateUrl: 'auth.component.html'
})

export class AuthComponent{
  constructor() {
    console.log(123);
  }
}
