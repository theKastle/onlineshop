import { AdminActions } from './admin/actions/admin-actions';
import { CartSummaryComponent } from './layout/cart-summary/cart-summary.component';
import { LayoutModule } from './layout/layout.module';
import { CheckoutModule } from './checkout/checkout.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/index';
import { ProductComponent } from './home/product-list/product/product.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductActions } from './home/product-list/actions/product-actions';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { reducer } from './app-reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule, AngularFire, FirebaseListObservable } from 'angularfire2';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from "@ngrx/store";

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';


import { DetailProductComponent } from './home/product-list/detail-product/detail-product.component';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    AppComponent,
    DetailProductComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    HomeModule,
    LayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    // CheckoutModule
  ],
  providers: [
    AdminActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
