import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MODULE_COMPONENTS, MODULE_ROUTES, MODULE_PROVIDERS } from './dashboard.routes';

import { RoleFilter } from '../app.common/pipes/user-role-filter';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS, RoleFilter ],
    providers: [ MODULE_PROVIDERS ]
})

export class DashboardModule{}
