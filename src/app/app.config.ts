import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//seria el equivalente al app.mmodule

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)] //funcion a la que pasamos nuestras rutas
};
