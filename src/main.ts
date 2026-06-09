import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

// Altere a linha 7 para terminar em @2.19.0/ (ou a versão exata do seu package.json)
(window as any).__shoelace_get_assets_path = () => 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
