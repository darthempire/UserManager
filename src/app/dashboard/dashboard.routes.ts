import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    // { path: 'user', component: UserComponent },
    // { path: 'table', component: TableComponent },
    // { path: 'icons', component: IconsComponent },
    // { path: 'notifications', component: NotificationsComponent },
    // { path: 'typography', component: TypographyComponent },
    // { path: 'maps', component: MapsComponent },
    // { path: 'upgrade', component: UpgradeComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
]
