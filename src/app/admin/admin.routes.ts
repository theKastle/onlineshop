import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './../home/home.component';

export const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'product/:id', component: EditProductComponent },
    { path: 'new', component: EditProductComponent },

];
