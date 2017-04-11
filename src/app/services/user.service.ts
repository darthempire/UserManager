import { User } from '../models/User';

export class UserService {
  
  private data: User[] = [
    new User("Petya", 12),
    new User("Natasha", -12)
  ];

  getPeoples(): User[] {
    return this.data;
  }

  addPeople(name: string, mark: number) {
    if(name === "" || mark === undefined)
      console.log("fsda");
    else
      this.data.push(new User(name, mark));

  }

  delPeople(guid: string) {
    this.data.splice(this.find(guid), 1);
  }

  private find(guid: string): number {
      for (let i: number = 0; i < this.data.length; i++) {
        if (this.data[i].guid == guid) return i;
      }
  }

}
