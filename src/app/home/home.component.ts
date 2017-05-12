import { AngularFire } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { getProducts, getCurrentPage } from './product-list/selector/selector';
import { ProductListState } from 'app/home/product-list/product-list-state';
import { Product } from './../core/models/product';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductActions } from "app/home/product-list/actions/product-actions";
import { getProductListState } from "app/home/product-list/selector/selector";
import { slideInDownAnimation } from './animations';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	// animations: [slideInDownAnimation]
})
export class HomeComponent implements OnInit {
	// @HostBinding('@routeAnimation') routeAnimation = true;
	//@HostBinding('style.display') display = 'block';
	//@HostBinding('style.position') position = 'absolute';


	sub: Subscription
	products$: any[];
	page$: Observable<number>;
	//	totalPages$: Observable<number>;
	pageArray: number[];

	constructor(private _store: Store<any>,
		private ProductActions: ProductActions,
		private route: ActivatedRoute,
		private af: AngularFire) {
		// this.products = this._store.select('ProductReducer')

		// this.totalPages$.subscribe(pages => {
		// 	this.pageArray = this.getPageArray(pages)
		// })

		// this.products$ = e.productEntities; console.log('lala', e)
		// 		this.page = e.page
		// 		this.pageArray = this.getPageArray(e.totalPages)

		// .subscribe((e: ProductListState) => {
		//   console.log(e)
		//   this.products$ = e.pr
		// })

	}

	private getPageArray(totalPages) {
		return Array.from(new Array(totalPages), (val, index) => index + 1);
	}

	ngOnInit() {
		this.sub = this.route.data.subscribe(data => {
			if (data.category) {
				console.log(data)
				this.af.database.list('/products', {
					query: {
						orderByChild: 'category',
						equalTo: data.category
					}
				}).subscribe(e => {
					this.products$ = e
				})
			} else {
				this.af.database.list('/products').subscribe(e => {
					this.products$ = e
				})
			}
		})
	}
}
