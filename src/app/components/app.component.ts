import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.html'
})
export class AppComponent {
  title = 'app works!';
  name:string="Tom";
  age:number = 24;
  count: number=0;
  increase() : void {
      this.count++;
  }
}
