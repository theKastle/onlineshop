import { ImageService } from './../core/services/image.service';
import { HomeModule } from './../home/index';
import { HomeComponent } from './../home/home.component';
import { ProductActions } from './../home/product-list/actions/product-actions';
import { AdminActions } from './actions/admin-actions';
import { AppState } from './../interface';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { routes } from './admin.routes';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ImageUploadComponent } from './edit-product/image-upload/image-upload.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HomeModule
  ],
  declarations: [AdminComponent, EditProductComponent, ImageUploadComponent],
  providers: [
    AdminActions,
    ProductActions,
    ImageService
  ]
})
export class AdminModule {
  constructor(private _store: Store<AppState>,
    private adminActions: AdminActions) {
    this._store.dispatch(this.adminActions.turn_on());
  }
}
