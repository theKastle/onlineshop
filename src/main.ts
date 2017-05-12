import { Product } from './app/core/models/product';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Store, provideStore } from '@ngrx/store'

if (environment.production) {
	enableProdMode();
}

/**
 * product, 
 * filter
 */
platformBrowserDynamic()
	.bootstrapModule(AppModule);
