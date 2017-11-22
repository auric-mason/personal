import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ProductService]
})

export class AppComponent implements OnInit {
    constructor( private _product: ProductService ) {
    }
    iproducts: Product[];
    title = 'app';
    name: String = 'World';
    appStatus: Boolean = false;
    appTitle: String = 'DeathTooSmoochie';
    appList: any[] = [
        {
            'ID': '1',
            'url': 'assets/images/one.png'
        },
        {
            'ID': '2',
            'url': 'assets/images/two.jpg'
        }
    ];
    prodList: Product[];

    ngOnInit(): void {
        this._product.getproducts()
            .subscribe( iproducts => this.iproducts = iproducts );
    }
}
