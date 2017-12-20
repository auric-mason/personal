import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PartnerService } from './services/PartnerService/partner.service';
import { ParserService } from './services/ParserService/parser.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    FlexLayoutModule
  ],
  providers: [
      PartnerService, ParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
