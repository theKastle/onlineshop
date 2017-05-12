import { CheckoutActions } from './../../checkout/actions/checkout-actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../../interface';
import { Component, OnInit, Input } from '@angular/core';
import { getCompletedSteps } from "app/layout/selectors";

@Component({
  selector: 'app-checkout-steps',
  templateUrl: './checkout-steps.component.html',
  styleUrls: ['./checkout-steps.component.css']
})
export class CheckoutStepsComponent implements OnInit {
  @Input() currentStep: string;
  private completedSteps: string[];

  private allSteps: string[] = ['cart', 'order-detail', 'payment']

  constructor(private _store: Store<AppState>) { }

  isAcive(step: string) {
    return step === this.currentStep;
  }

  isComplete(step: string) {
    var flag = this.completedSteps.includes(step)
    return flag
  }

  ngOnInit() {
    this._store.select(getCompletedSteps).subscribe(e => {
      this.completedSteps = e
    })
  }

}
