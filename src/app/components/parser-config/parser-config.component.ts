import { PartnerService } from '../../services/PartnerService/partner.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-partner-config',
    templateUrl: './partner-config.component.html',
    styleUrls: ['./partner-config.component.css'],
    providers: [ PartnerService ]
  })

export class ParserConfigComponent implements OnInit {
    title = 'app';
    data: ReportingPartner[] = new Array<ReportingPartner>();
    partner: ReportingPartner = { PartnerId: 'NEW', PartnerInow:
    {EntityName: 'NEW', Street1: 'NEW', Street2: 'NEW', City: 'NEW', StateProvince: 'NEW', PostalCode: 'NEW',
        Country: { Name: 'NEW', twoCharCode: 'NEW', threeCharCode: 'NEW'}},
        gsNumber: { value: 'NEW', zone: 'NEW', subZone1: 'NEW', subZone2: 'NEW', partnerType: 'NEW',
            transitDays: 7, currency: 'USD', priceOverride: true}};
    displayDialog: boolean;
    newPartner: boolean;
    selectedPartner: ReportingPartner;

    constructor(@Inject(PartnerService) private _partnerService: PartnerService ) {

    }

    ngOnInit(): void {
        this.reload(null);
    }

    reload(event) {
        this._partnerService.getPartners()
        .subscribe( ipartners => this.data = ipartners);

    }

    saveChanges( event ) {
        console.log( 'saved:' + event );
        const partners = [...this.data];
        if (this.newPartner) {
            this._partnerService.createPartner(this.partner);
            partners.push(this.partner);
        } else {
            this._partnerService.updatePartner(this.partner);
            partners[this.findSelectedPartnerIndex()] = this.partner;
        }
        this.data = partners;
        this.partner = null;
        this.displayDialog = false;
        // this.reload( event ); -- TODO uncomment once hooked up to a back end.
    }

    showDialogToAdd() {
        this.newPartner = true;
        this.partner = new PartnerComponent('NewPartner');
        this.displayDialog = true;
    }

    onRowSelect(event) {
        this.newPartner = false;
        this.partner = this.clonePartner(event.data);
        this.displayDialog = true;
    }

    clonePartner(r: ReportingPartner): ReportingPartner {
        return JSON.parse(JSON.stringify(r));
    }

    findSelectedPartnerIndex(): number {
        return this.data.indexOf(this.selectedPartner);
    }
}

class PartnerComponent implements ReportingPartner {
    constructor(public PartnerId, public PartnerInow?, public gsNumber?) {}
}

