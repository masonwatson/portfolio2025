import { Routes } from '@angular/router';
import { HomeComponent } from './homeModule/components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent, 
        children: [

        ] 
    }
];
