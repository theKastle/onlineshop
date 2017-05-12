import { Address } from './../../core/models/address';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'app-order-detail',
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
	orderDetail: FormGroup;
	constructor(private fb: FormBuilder) { }

	createFrom() {
		this.orderDetail = this.fb.group({
			name: ['', Validators.required],
			address: this.fb.group({
				address: ['', Validators.required],
				city: ['', Validators.required],
				district: ['', Validators.required],
			})
		})
	}

	ngOnInit() {
		this.createFrom();
	}

	onSubmit() {
		console.log(this.orderDetail.value)
	}

}
