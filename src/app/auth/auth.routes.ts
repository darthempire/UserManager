import { Route } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';


export const MODULE_ROUTES: Route[] =[
    { path: 'auth', component: AuthComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    AuthComponent,
    LoginComponent
]
