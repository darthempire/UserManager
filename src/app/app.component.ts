import { Component, OnInit, AfterContentChecked,
        AfterViewChecked,
        AfterViewInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var $:any;

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  isAuthPage: boolean = true;
  location: Location;
  constructor(location:Location) {
      this.location = location;
  }

  ngOnInit(){
      $.getScript('../assets/js/material-dashboard.js');
      $.getScript('../assets/js/initMenu.js');
  }

  ngDoCheck() {
    this.isAuthPage = this.checkIsAuthPage();
    console.log(this.isAuthPage);
  }

  private checkIsAuthPage(): boolean {
      var titlee = this.location.prepareExternalUrl(this.location.path()).slice( 1 );
      if("/login" == titlee || "/registration" == titlee)
          return true;
      else
          return false;
  }


}
