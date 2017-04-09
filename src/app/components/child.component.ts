import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>
              <button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
  @Input() userName: string;
  @Input() userAge: number;

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased) {
      this.onChanged.emit(increased);
  }
}
