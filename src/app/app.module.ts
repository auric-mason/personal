import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ButtonModule } from 'primeng/primeng';
import {DataTableModule, SharedModule, DialogModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ButtonModule,
        DataTableModule,
        SharedModule,
        DialogModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [BrowserModule, HttpModule],
    bootstrap: [AppComponent]
} )
export class AppModule { }
