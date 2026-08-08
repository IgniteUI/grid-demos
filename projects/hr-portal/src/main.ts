import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { IgcGridLite } from 'igniteui-grid-lite';
import { IgcAvatarComponent, IgcRatingComponent } from 'igniteui-webcomponents';


import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

IgcGridLite.register();
IgcAvatarComponent.register();
IgcRatingComponent.register();

bootstrapApplication(AppComponent, {...appConfig, providers: [provideZoneChangeDetection(), ...appConfig.providers]})
  .catch((err) => console.error(err));
