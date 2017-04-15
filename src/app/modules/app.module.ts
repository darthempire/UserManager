import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from '../components/app.component';
import { AuthComponent } from '../components/auth.component';
import { ItemComponent } from '../components/item.component';
import { NotFoundComponent } from '../components/not-found.component';

import { AboutGuard }   from '../guards/auth.guard';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: AppComponent},
	{ path: 'auth', component: AuthComponent, canActivate: [AboutGuard]},
    { path: 'auth/:id', component: AuthComponent},
	{ path: 'item/:id', component: ItemComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent, AuthComponent, NotFoundComponent, ItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
		RouterModule.forRoot(appRoutes)
    ],
    providers: [AboutGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }
