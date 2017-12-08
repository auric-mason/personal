import { PartnerService } from './PartnerService/partner.service';
import { Component, OnInit } from '@angular/core';
import { ReportingPartner } from './PartnerService/reporting-partner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PartnerService]
})
export class AppComponent implements OnInit {
    title = 'app';
    rows: ReportingPartner[] = new Array<ReportingPartner>();
    editing = {};
    isModified: boolean;

    constructor( private _partnerService: PartnerService ) {
        this.isModified = false;
        this.reload(null);
    }

    ngOnInit(): void {
        this.reload(null);
    }

    updateValue(event, cell, rowIndex) {
        this.isModified = true;
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows[rowIndex].status = 1;
        this.rows = [...this.rows];
      }

    reload(event) {
        this._partnerService.getPartners()
        .subscribe( ipartners => this.rows = ipartners);
        this.isModified = false;
    }

    saveChanges( event ) {
        console.log( 'saved:' + event );
        const updteRp: ReportingPartner[] = [];
        const newRp: ReportingPartner[] = [];

        this.rows.forEach( rp => {
            if ( rp.status === 1 ) {
                updteRp.push( rp );
            }
            if ( rp.status === -1 ) {

                newRp.push( rp );
            }
        } );
        this._partnerService.updatePartners( updteRp );
        this._partnerService.updatePartners( newRp );
        this.reload( event );
    }

    newPartner(event) {
        console.log('new partner');

        const rp: ReportingPartner = { PartnerId: 'NEW', status: -1, PartnerInow:
        {EntityName: 'NEW', Street1: 'NEW', Street2: 'NEW', City: 'NEW', StateProvince: 'NEW', PostalCode: 'NEW',
            Country: { Name: 'NEW', twoCharCode: 'NEW', threeCharCode: 'NEW'}},
            gsNumber: { value: 'NEW', zone: 'NEW', subZone1: 'NEW', subZone2: 'NEW', partnerType: 'NEW',
                transitDays: 7, currency: 'USD', priceOverride: true}};
        this.rows.push(rp);
        this.isModified = true;
    }
}
