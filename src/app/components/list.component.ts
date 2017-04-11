import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserService } from './../services/user.service';

@Component({
  selector: 'list-comp',
  templateUrl: '../templates/list.html',
  providers: [UserService]
})
export class ListComponent {
  name: string;
  mark: number;

  items: User[] = [];
  constructor(private peopleService: UserService) {}

  ngOnInit() {
    this.items = this.peopleService.getPeoples();
    console.log(this.items);
  }

  addItem(name: string, mark: number): void {
    this.peopleService.addPeople(name, mark);
    this.name = "";
    this.mark = null;
  }

  delItem(guid) {
    this.peopleService.delPeople(guid);
  }
}
