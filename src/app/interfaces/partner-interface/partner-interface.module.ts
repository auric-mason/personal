import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inow, DomainInterfaceModule, PartnerInow, Country } from '../domain-interface/domain-interface.module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class PartnerInterfaceModule { }

export interface GsNumber {
    value: string;
    zone?: string;
    subZone1?: string;
    subZone2?: string;
    partnerType?: string;
    transitDays?: string;
    currency?: string;
    priceOverride?: string;
}

export interface ReportingPartner extends PartnerInow {
    PartnerId: string;
    gsNumber: GsNumber;
    PartnerInow: PartnerInow;
}
