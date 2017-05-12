import { getCartLinesCount, getTotalPrice } from './../../checkout/selectors/selectors';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../interface';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { getCheckoutState } from "app/checkout/selectors/selectors";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  items$: Observable<number>;
  total$: Observable<number>;

  constructor(private _store: Store<AppState>) {
    this.items$ = this._store.select(getCartLinesCount)
    this.total$ = this._store.select(getTotalPrice)
  }

  ngOnInit() {
  }

}
