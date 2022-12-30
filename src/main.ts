import { enableProdMode } from '@angular/core';
import { App } from './app/app.component';
import { environment } from './environements/environment';

if (environment.production) {
  enableProdMode();
}

App.bootstrap();