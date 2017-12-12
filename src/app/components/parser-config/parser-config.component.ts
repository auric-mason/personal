import { ParserService } from '../../services/ParserService/parser.service';
import { Component, OnInit, Inject } from '@angular/core';

import { ParserList } from '../../interfaces/parser-list-interface/parser-list-interface.module';
import { PartnerInow, Country } from '../../interfaces/domain-interface/domain-interface.module';

import { ParserConfig } from '../../interfaces/parser-config-interface/parser-config-interface.module';
import { DropdownModule, SelectItem } from 'primeng/primeng';
import { PapaParseService, PapaParseConfig, PapaParseResult } from 'ngx-papaparse';

@Component( {
    selector: 'app-parser-config',
    templateUrl: './parser-config.component.html',
    styleUrls: ['./parser-config.component.css'],
    providers: [ParserService]
} )

export class ParserConfigComponent implements OnInit {
    dataTypes: SelectItem[];
    selectedDatatype: SelectItem;
    delimiter: string;
    quote: string;
    headLineCnt: number;
    parserList: ParserList[] = new Array<ParserList>();
    config: ParserConfig[] = new Array<ParserConfig>();

    data: any[] = new Array<any>();
    cols: ConfigColumn[] = new Array<ConfigColumn>();
    uploadedFile: any;

    isEditMode: boolean;
    newParser: boolean;
    selectedParser: ParserList;

    constructor( @Inject( ParserService ) private _parserService: ParserService, private papa: PapaParseService ) {
        this.dataTypes = [{label: 'csv', value: 'csv'},
                          {label: 'excel', value: 'excel'},
                          {label: 'excel xls', value: 'excel xls'}];
        console.log(this.dataTypes);
        this.selectedDatatype = this.dataTypes[0];
        this.headLineCnt = 1;

    }

    ngOnInit(): void {
        this.reload( null );
    }

    reload( event ) {
        this._parserService.getParsers()
            .subscribe( iparsers => this.parserList = iparsers );

    }

    onUpload( event ) {
        for ( const file of event.files ) {
            this.uploadedFile = file;
            console.log( 'file set:' + file );
        }
        this.parseFile();
    }

    private parseFile() {

        this.papa.parse( this.uploadedFile, {
            delimiter: this.delimiter,
            header: this.headLineCnt > 0,
            quoteChar: this.quote,
            complete: ( results ) => {
                this.parseComplete( results );
            }
        } );
    }

    onRowSelect( event ) {
        this.isEditMode = true;
        // this.partner = this.clonePartner(event.data);
    }

    parseComplete( results: PapaParseResult ) {
        this.data = results.data;
        if ( results.meta.fields !== undefined ) {
            console.log( 'fields' + results.meta.fields );
            results.meta.fields.forEach( f => {
                const col = new ConfigColumn( f );
                this.cols.push( col );
            } );
        } else {
            results.data[0].forEach( f => {
                const col = new ConfigColumn( f );
                this.cols.push( col );
            } );
        }
        console.log( this.cols );
        console.log( results.data[0] );
    }
}

class ConfigColumn {
    config: ParserConfig;
    fileColValue: string;

    constructor( fieldName: string ) {
        this.fileColValue = fieldName;
    }
}
