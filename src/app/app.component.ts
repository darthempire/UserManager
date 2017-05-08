import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var $:any;

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  location: Location;
  constructor(location:Location) {
      this.location = location;
      console.log(this.location);
  }

  ngOnInit() {
  }

}
