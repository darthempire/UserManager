import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../components/app.component';
import { HomeComponent } from '../components/home.component';
import { AboutComponent } from '../components/about.component';
import { ItemComponent } from '../components/item.component';
import { ItemDetailsComponent } from '../components/item.details.component';
import { ItemStatComponent } from '../components/item.stat.component';
import { ItemDescriptionComponent } from '../components/item.description.component';
import { NotFoundComponent } from '../components/not-found.component';

import { AboutGuard } from '../guards/auth.guard';

// определение дочерних маршрутов
const itemRoutes: Routes = [
    { path: 'details', component: ItemDetailsComponent},
    { path: 'stat', component: ItemStatComponent},
	{ path: 'descr', component: ItemDescriptionComponent},
];

// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'item/:id', component: ItemComponent, children: itemRoutes},
    { path: 'redirect', redirectTo: '/' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        AboutComponent,
        HomeComponent,
        ItemComponent,
		ItemStatComponent,
		ItemDetailsComponent,
		ItemDescriptionComponent
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
