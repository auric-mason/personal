import { ParserService } from '../../services/ParserService/parser.service';
import { Component, OnInit, Inject } from '@angular/core';

import { ParserList } from '../../interfaces/parser-list-interface/parser-list-interface.module';
import { PartnerInow, Country } from '../../interfaces/domain-interface/domain-interface.module';

@Component({
    selector: 'app-parser-config',
    templateUrl: './parser-config.component.html',
    styleUrls: ['./parser-config.component.css'],
    providers: [ ParserService ]
  })

export class ParserConfigComponent implements OnInit {
    title = 'app';
    data: ParserList[] = new Array<ParserList>();

    displayDialog: boolean;
    newParser: boolean;
    selectedParser: ParserList;

    constructor(@Inject(ParserService) private _parserService: ParserService ) {

    }

    ngOnInit(): void {
        this.reload(null);
    }

    reload(event) {
        this._parserService.getParsers()
        .subscribe( iparsers => this.data = iparsers);

    }

}

