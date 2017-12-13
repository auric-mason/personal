import { ParserService } from '../../services/ParserService/parser.service';
import { Component, OnInit, Inject } from '@angular/core';

import { ParserList } from '../../interfaces/parser-list-interface/parser-list-interface.module';
import { PartnerInow, Country } from '../../interfaces/domain-interface/domain-interface.module';

import { ParserConfig } from '../../interfaces/parser-config-interface/parser-config-interface.module';
import { DropdownModule, SelectItem, MenubarModule, MenuItem } from 'primeng/primeng';
import { PapaParseService, PapaParseConfig, PapaParseResult } from 'ngx-papaparse';

import * as XLSX from 'xlsx';
type AOA = Array<Array<any>>;

@Component( {
    selector: 'app-parser-config',
    templateUrl: './parser-config.component.html',
    styleUrls: ['./parser-config.component.css'],
    providers: [ParserService]
} )

export class ParserConfigComponent implements OnInit {
    dataTypes: SelectItem[];
    selectedDatatype: string;
    delimiter: string;
    quote: string;
    headLineCnt: number;
    parserList: ParserList[] = new Array<ParserList>();
    config: ParserConfig[] = new Array<ParserConfig>();

    data: any[] = new Array<any>();
    excelData: AOA = [ [1, 2], [3, 4] ];
    excelSheets: string[];
    cols: ConfigColumn[] = new Array<ConfigColumn>();

    items: MenuItem[];

    isEditMode: boolean;
    newParser: boolean;
    selectedParser: ParserList;

    constructor( @Inject( ParserService ) private _parserService: ParserService, private papa: PapaParseService ) {
        this.dataTypes = [{ label: 'csv', value: 'csv' },
        { label: 'excel', value: 'xlsx' },
        { label: 'excel xls', value: 'xls' }];
        this.selectedDatatype = 'xlsx';
        this.headLineCnt = 1;

        this.items = [
                      {
                          label: 'File',
                          items: [{
                                  label: 'New',
                                  icon: 'fa-plus',
                                  items: [
                                      {label: 'Project'},
                                      {label: 'Other'},
                                  ]
                              },
                              {label: 'Open'},
                              {label: 'Quit'}
                          ]
                      }
                      ];
    }

    ngOnInit(): void {
        this.reload( null );
    }

    reload( event ) {
        this._parserService.getParsers()
            .subscribe( iparsers => this.parserList = iparsers );

    }

    onRowSelect( event ) {
        this.isEditMode = true;
        // this.partner = this.clonePartner(event.data);
    }

    onUpload( event ) {
        let uploadedFile: any;

        for ( const file of event.files ) {
            uploadedFile = file;
        }
        console.log(this.selectedDatatype);
        switch ( this.selectedDatatype ) {
            case 'csv':
                this.parseCsvFile( uploadedFile );
                break;
            case 'xlsx':
                this.parseExcelFile( uploadedFile );
                break;
        }
    }

    selectAllCars() {
        console.log('all cars');
    }

    private parseExcelFile( uploadedFile: any ) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(uploadedFile);

        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const wb: XLSX.WorkBook = XLSX.read(e.target.result, {type: 'binary'});

            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            this.excelSheets = wb.SheetNames;
            /* save data  */
            this.excelData = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
            this.excelData[0].forEach( f => {
                const col = new ConfigColumn( f );
                this.cols.push( col );
            });
            this.data = this.convertToArrayOfObjects(this.excelData);

        };
        reader.readAsBinaryString(uploadedFile);
    }

    private convertToArrayOfObjects( data ): any {
        const keys = data.shift(),
            output = [];
        let i = 0, k = 0,
            obj = null;

        for ( i = 0; i < data.length; i++ ) {
            if ( data[i] !== undefined && data[i].length === 0 ) {
                break;
            }
            obj = {};
            for ( k = 0; k < keys.length; k++ ) {
                obj[keys[k]] = data[i][k];
            }

            output.push( obj );
        }

        return output;
    }

    private parseCsvFile( uploadedFile: any ) {

        this.papa.parse( uploadedFile, {
            delimiter: this.delimiter,
            header: this.headLineCnt > 0,
            quoteChar: this.quote,
            complete: ( results ) => {
                this.parseCsvComplete( results );
            }
        } );
    }

    parseCsvComplete( results: PapaParseResult ) {
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
        console.log( results.data );
    }
}

class ConfigColumn {
    config: ParserConfig;
    fileColValue: string;

    constructor( fieldName: string ) {
        this.fileColValue = fieldName;
    }
}
