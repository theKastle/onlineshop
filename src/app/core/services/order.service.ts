import { OrderDetail } from './../models/orderDetail';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';

import 'rxjs/add//operator/map'

@Injectable() // I can inject sth into the constructor
export class OrderService implements OnInit {
  // private _url = 'http://localhost:1337'

  ngOnInit(): void {
    //	throw new Error('Method not implemented.');
  }

  // placeOrder(order: OrderDetail): Observable<any[]> {
  //   // return this._http
  //   //   .post(this._url + '/Order', order)
  // }

  getProductSummary() {

  }

  constructor(private _http: Http) { }
}
