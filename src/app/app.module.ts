import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ButtonModule } from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ButtonModule,
        DataTableModule,
        SharedModule
    ],
    providers: [BrowserModule, HttpModule],
    bootstrap: [AppComponent]
} )
export class AppModule { }
