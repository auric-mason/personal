import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DomainInterfaceModule { }

export interface Country {
    Name: string;
    twoCharCode: string;
    threeCharCode: string;
}

export interface Inow {
    EntityName: string;
    Street1: string;
    Street2: string;
    City: string;
    StateProvince: string;
    PostalCode: string;
    Country: Country;
}

export interface PartnerInow extends Inow {
    partnerId?: string;
}
