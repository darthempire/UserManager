import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";

export class AuthGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        let authData = JSON.parse(localStorage.getItem('authorizationData'));
        console.log(authData);
        if(!authData)
            return false;
        return true;
    }

}
