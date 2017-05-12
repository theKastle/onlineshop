import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseApp } from 'angularfire2';
import { CheckoutActions } from './../../../checkout/actions/checkout-actions';
import { AppState } from './../../../interface';
import { Store } from '@ngrx/store';
import { Product } from '../../../core/models/product';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { getMode } from "app/admin/selectors/selectors";


declare var firebaseApp: firebase.app.App;

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	@Input() product: any
	image: string;
	adminMode: boolean;
	notAdminMode: boolean;
	key: string;

	constructor(private _store: Store<AppState>,
		private CheckoutActions: CheckoutActions
	) {
		this._store.select(getMode).subscribe(e => {
			this.adminMode = e
			this.notAdminMode = !e
		})
	}

	addToCart(product) {
		this._store.dispatch(this.CheckoutActions.addToCart(product))
	}

	ngOnInit() {
		this.key = this.product.$key
		//	const storageRef = this.firebaseApp.storage().ref().child(this.product.imageUrl);
		//	storageRef.getDownloadURL().then(url => this.image = url);
	}
}
