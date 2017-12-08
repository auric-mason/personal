import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'partnerConfig', loadChildren: './components/partner-config/partner.module#PartnerModule'},
            {path: 'parserConfig', loadChildren: './components/parser-config/parser.module#ParserModule'},
            {path: 'fileScannerConfig', loadChildren: './components/filescanner-config/filescanner.module#FileScannerModule'}
            ])
    ],
    exports:  [RouterModule]
})
export class AppRoutingModule {}
