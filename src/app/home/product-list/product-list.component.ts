import { ProductActions } from './actions/product-actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	@Input() products;
	@Input() page;
	@Input() pageArray;

	constructor() { 
	}

	ngOnInit() {
	}

}
