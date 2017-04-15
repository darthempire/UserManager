import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from '../components/app.component';
import { NotFoundComponent } from '../components/not-found.component';

import { AboutGuard }   from '../guards/auth.guard';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent, NotFoundComponent
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
