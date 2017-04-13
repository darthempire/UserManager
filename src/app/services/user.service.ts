import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Http 	} from '@angular/http';
import { LogService } from '../services/log.service';

@Injectable()
export class UserService {

    private data: User[] = [
        new User("Petya", 12),
        new User("Natasha", -12)
    ];

	constructor(private logService: LogService, private http: Http) {

	}

    getPeoples() {
		this.logService.write("операция получения данных");
		return this.http.get('http://localhost:64183/api/values')
    }

    addPeople(name: string, mark: number) {
        if (name === "" || mark === undefined)
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
