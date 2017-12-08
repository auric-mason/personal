import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';
import { ParserConfigRoutingModule } from './parserconfig-routing.module';
import { ParserConfigComponent } from './parser-config.component';
@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    ParserConfigRoutingModule,
    DataTableModule
  ],
  declarations: [ ParserConfigComponent ]
})
export class ParserModule { }
