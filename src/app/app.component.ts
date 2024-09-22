import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadProjects } from './homeModule/state/home-ui.actions';
import { AppState } from './app.state';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.store.dispatch(LoadProjects());
    }
}
