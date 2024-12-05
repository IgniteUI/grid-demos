import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
  ],
};
