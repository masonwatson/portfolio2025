import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { SetActiveItem } from '../../state/home-ui.actions';
import config from "../../../../config/about.config.json"

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less',
})
export class FooterComponent {
    @Input() typedText: string;

    constructor(
        private store: Store<AppState>,
    ) {}

    handleAboutClick(): void {
        this.store.dispatch(SetActiveItem({
            id: config.about.id,
            project: {
                id: config.about.id,
                name: config.about.name,
                stack: config.about.stack
            },
            isProject: false
        }))
    }
}
