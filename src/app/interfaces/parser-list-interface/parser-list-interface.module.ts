import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inow, PartnerInow, Country } from '../domain-interface/domain-interface.module';

@NgModule( {
    imports: [
        CommonModule
    ],
    declarations: []
} )
export class ParserListInterfaceModule { }

export interface ParserList {
    sid: string;
    name: string;
    type: string;
    partnerInow: PartnerInow;
}



