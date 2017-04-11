import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AuthComponent }   from '../components/auth.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AuthComponent ],
    bootstrap:    [ AuthComponent ]
})
export class AuthModule { }
