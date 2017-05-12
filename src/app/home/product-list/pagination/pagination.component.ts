import { ProductActions } from './../actions/product-actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../../interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() page;
  @Input() pageArray;

  constructor(private _store: Store<AppState>, private ProductActions: ProductActions, ) {
  }

  click(item) {
    this._store.dispatch(this.ProductActions.loadProducts(item, 5))
  }

  ngOnInit() { }

}
