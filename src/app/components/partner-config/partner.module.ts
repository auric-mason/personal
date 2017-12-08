import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';
import { PartnerConfigRoutingModule } from './partnerconfig-routing.module';
import { PartnerConfigComponent } from './partner-config.component';
@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    PartnerConfigRoutingModule,
    DataTableModule
  ],
  declarations: [ PartnerConfigComponent ]
})
export class PartnerModule { }
