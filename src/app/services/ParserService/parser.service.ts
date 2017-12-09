import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ParserList } from '../../interfaces/parser-list-interface/parser-list-interface.module';
import { PartnerInow, Country } from '../../interfaces/domain-interface/domain-interface.module';

@Injectable()
export class ParserService {

    private _parserListUrl = 'assets/parserList.json';
    private _parserConfigUrl = 'assets/parser.json';
    private _PartnerUrl = 'localhost:8080/nucleus/api/partner';
    constructor( private _http: Http ) { }


    getParsers(): Observable<ParserList[]> {
        return this._http.get( this._parserListUrl )
            .map(( response: Response ) => <ParserList[]>response.json() )
            .catch( this.handleError );
    }

    private handleError( error: Response ) {
        console.error( error );
        return Observable.throw( error.json().error() );
    }
}
