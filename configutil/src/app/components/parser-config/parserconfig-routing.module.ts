import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParserConfigComponent } from './parser-config.component';

@NgModule( {
    imports: [
        RouterModule.forChild( [
            { path: '', component: ParserConfigComponent }
        ] )
    ],
    exports: [
        RouterModule
    ]
} )

export class ParserConfigRoutingModule { }
