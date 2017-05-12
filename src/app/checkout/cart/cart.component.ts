import { ScriptService } from './../../shared/script/script.service';
import { GeneralActions } from './../../layout/actions/actions';
import { CheckoutActions } from './../actions/checkout-actions';
import { getItems, getTotalPrice } from './../selectors/selectors';
import { AppState } from './../../interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CartLine } from './../../core/models/cartLine';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	cartLines: Observable<CartLine[]>
	total: number;

	constructor(private _store: Store<AppState>,
		private checkoutActions: CheckoutActions,
		private generalActions: GeneralActions,
		private scriptService: ScriptService) {

		this.cartLines = this._store.select(getItems)
	}

	ngOnInit() {
		console.log('INIT')
		this._store.dispatch(this.generalActions.startCheckoutSteps())
		this._store.select(getTotalPrice).subscribe(price => {
			this.total = price
		})
	}

	checkout() {}
}
