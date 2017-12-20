import { Component, OnInit } from '@angular/core';
import { PanelMenuModule, MenuItem } from 'primeng/primeng';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )

export class AppComponent implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Setup',
                icon: 'fa fa-cogs',
                items: [
                {
                    label: 'Parsers',
                    title: 'Parser configuration',
                    icon: 'fa fa-map',
                    routerLink: ['/parserConfig']
                },
                {
                    label: 'Partners',
                    title: 'Reporting partner configuration',
                    icon: 'fa fa-handshake-o',
                    routerLink: ['/partnerConfig']
                },
                {
                    label: 'File Scanner',
                    title: 'When/where to pick up files',
                    icon: 'fa fa-paper-plane',
                    routerLink: ['/fileScannerConfig']
                },
                {
                    label: 'General',
                    icon: 'fa fa-toggle-on',
                    title: 'Generic customer configuration',
                    routerLink: ['/generalConfig']
                },
                {
                    label: 'Exports',
                    icon: 'fa fa-exchange',
                    title: 'Exporter format configuration',
                    routerLink: ['/exporterConfig']
                },
                {
                    label: 'Export Cond',
                    title: 'When/where to export what',
                    icon: 'fa fa-filter',
                    routerLink: ['/snlConfig']
                },
                {
                    label: 'Validations',
                    title: 'Data validate configuration',
                    icon: 'fa fa-star',
                    routerLink: ['/validationConfig']
                }
                ]
            }
        ];
    }
}
