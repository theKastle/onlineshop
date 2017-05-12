import { AdminActions } from './admin/actions/admin-actions';
import { getMode } from 'app/admin/selectors/selectors';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { ProductActions } from 'app/home/product-list/actions/product-actions';
import { AppState } from './interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Router, NavigationEnd } from '@angular/router'
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  adminMode: boolean;

  ngOnInit(): void {
  }

  currentUrl: string;
  currentStep: string;
  checkoutUrls = ['/checkout/cart', '/checkout/order-detail', '/checkout/payment'];

  title = 'Online shop';

  constructor(private router: Router,
    private productActions: ProductActions,
    private adminActions: AdminActions,
    private store: Store<AppState>,
    private af: AngularFire) {
    this.router
      .events
      .filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => {
        this.currentUrl = e.url;

        this.findCurrentStep(this.currentUrl);
        window.scrollTo(0, 0);
      });
    this.store.select(getMode).subscribe(
      e => {
        this.adminMode = e
      }
    )
  }

  isCheckoutRoute() {
    var flag = false;
    if (!this.currentUrl) {
      flag = false;
    }
    const index = this.checkoutUrls.indexOf(this.currentUrl);
    if (index >= 0) {
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  }

  private findCurrentStep(currentRoute) {
    const currRouteFragments = currentRoute.split('/');
    const length = currRouteFragments.length;
    this.currentStep = currentRoute.split('/')[length - 1];
  }

  selectCategory(category: string) {
    // if (category = 'Food') {
    //   this.af.database.list('/products', {
    //     query: {
    //       orderByChild: 'category',
    //       equalTo: 'Food'
    //     }
    //   })
    //   this.store.dispatch(this.productActions.getFood())
    // }
  }

  turnOffAdmin() {
    this.store.dispatch(this.adminActions.turnOff())
  }

  turnOnAdmin() {
    this.store.dispatch(this.adminActions.turn_on())
  }
}
