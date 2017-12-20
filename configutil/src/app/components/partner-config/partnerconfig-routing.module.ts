import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartnerConfigComponent } from './partner-config.component';

@NgModule( {
    imports: [
        RouterModule.forChild( [
            { path: '', component: PartnerConfigComponent }
        ] )
    ],
    exports: [
        RouterModule
    ]
} )
export class PartnerConfigRoutingModule { }
