import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';
import { ParserConfigRoutingModule } from './parserconfig-routing.module';
import { ParserConfigComponent } from './parser-config.component';
import { PapaParseModule } from 'ngx-papaparse';
import { DropdownModule } from 'primeng/primeng';
import { SpinnerModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import * as XLSX from 'xlsx';



@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    ParserConfigRoutingModule,
    DataTableModule,
    DropdownModule,
    SpinnerModule,
    FileUploadModule,
    PapaParseModule,
    ToolbarModule
  ],
  declarations: [ ParserConfigComponent ],
  providers: [ PapaParseModule ]
})
export class ParserModule { }
