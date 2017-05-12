import { ProductActions } from './../../home/product-list/actions/product-actions';
import { Store } from '@ngrx/store';
import { AppState } from 'app/interface';
import { Product } from './../../core/models/product';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFire } from 'angularfire2'
import 'rxjs/add//operator/map'

@Injectable() // I can inject sth into the constructor
export class ProductsService implements OnInit {
	// private _url = 'http://localhost:1337'

	ngOnInit(): void {
		//	throw new Error('Method not implemented.');
	}

	getData() {
		return this.af.database.list('products')
	}

	getProducts(page: number, count: number): Observable<any[]> {
		//	firebase.database.enableLogging(true)
		return this.af.database.list('products').map(e => {

			// console.log('E = ', e)
			return e;
		})
		// .map(e => {
		// 	 console.log('e = ', e)
		// 	return e
		// })
		// 	return this._http
		// 		.get(this._url + '/Product', { params: { page, count } })
		// 		.map(e => { return e.json() })
		// 
	}

	getProduct(id) {
		return this.af.database.object('products/' + id)
	}

	saveQuestion(product: Product) {
		this.af.database.list('products').push(product).then(
			(ret) => {  //success
				this._store.dispatch(this.productActions.addProductSuccess());
			},
			(error: Error) => {//error
				console.error(error);
			}
		);
	}

	getProductSummary() {

	}

	constructor(private _http: Http,
		private af: AngularFire,
		private _store: Store<AppState>,
		private productActions: ProductActions) { }
}
