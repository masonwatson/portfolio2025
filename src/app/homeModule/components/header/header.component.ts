import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { ResetProjects } from '../../state/home-ui.actions';
import { bottomBarTransform, middleBarTransform, topBarTransform } from '../../../../settings/header.animation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  animations: [
    topBarTransform,
    middleBarTransform,
    bottomBarTransform
  ]
})
export class HeaderComponent implements OnInit {
    @Input() isHandheld: boolean;
    @Input() thereIsActiveItem: boolean;
    @Input() typedText: string;

    constructor(
        private store: Store<AppState>,
    ) { }

    ngOnInit():void {
    }

    handleHeaderButtonClick(): void {
        if (this.thereIsActiveItem) {
            this.store.dispatch(ResetProjects());
        } else {

        }
    }
}
