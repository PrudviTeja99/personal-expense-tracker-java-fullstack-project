import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptor/auth/auth.interceptor';
import { loadingInterceptor } from './core/interceptor/loading/loading.interceptor';
import { apiStatusInterceptor } from './core/interceptor/api-status/api-status.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes), 
      provideClientHydration(withEventReplay()), 
      provideAnimationsAsync(), 
      provideHttpClient(
        withFetch(),
        withInterceptors([
          authInterceptor,
          loadingInterceptor,
          apiStatusInterceptor
        ])
      )
    ]
};
