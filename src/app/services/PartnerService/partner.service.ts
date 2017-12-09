import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ReportingPartner } from './reporting-partner';


@Injectable()
export class PartnerService {
    private _partnerurl = 'assets/reportingPartner.json';
    private _PartnerUrl = 'localhost:8080/nucleus/api/partner';
    constructor( private _http: Http ) { }

    createPartners( newPartners: ReportingPartner[] ) {
        newPartners.forEach( x => {
            console.log('create partners ' + x.PartnerId );
        } );
        // this._http.post(this._PartnerUrl, newPartners).subscribe();
    }

    updatePartners( newPartners: ReportingPartner[] ) {
        newPartners.forEach( x => {
            console.log('update partner ' + x.PartnerId );
        } );
        // this._http.put(this._PartnerUrl, newPartners).subscribe();
    }


    createPartner( newPartner: ReportingPartner) {
        const partners:  ReportingPartner[] = new Array<ReportingPartner>();
        partners.push(newPartner);
        this.createPartners(partners);
    }

    updatePartner( newPartner: ReportingPartner ) {
        const partners:  ReportingPartner[] = new Array<ReportingPartner>();
        partners.push(newPartner);
        this.updatePartners(partners);
    }

    getPartners(): Observable<ReportingPartner[]> {
        return this._http.get( this._partnerurl )
            .map(( response: Response ) => <ReportingPartner[]>response.json() )
            .do( data => data.forEach( rp => {
                console.log(rp.PartnerId);
            }))

            .catch( this.handleError );
    }

    private handleError( error: Response ) {
        console.error( error );
        return Observable.throw( error.json().error() );
    }
}
