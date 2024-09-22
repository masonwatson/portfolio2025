import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { HomeUIEffects } from './homeModule/state/home-ui.effects';
import { ProjectsService } from '../services/projects.service';
import { homeUIReducer, initialState } from './homeModule/state/home-ui.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ResponsiveService } from '../services/responsive.service';
import { TypewriterService } from '../services/typewriter.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore({
            homeUI: homeUIReducer,
        }),
        provideEffects(
            HomeUIEffects,
        ),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode()
        }),
        provideAnimations(),
        ProjectsService,
        ResponsiveService,
        TypewriterService,
    ]
};
