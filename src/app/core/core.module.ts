import { ProductsService } from './services/products.service';
import { ProductEffects } from '../home/product-list/effects/product-effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(ProductEffects),
  ],
  declarations: [],
  providers: [
    ProductsService,
  ]
})
export class CoreModule { }
