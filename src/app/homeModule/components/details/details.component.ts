import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectActiveProject, selectIsProject, selectIsStackReadyForRender } from '../../state/home-ui.selectors';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { StackComponent } from '../stack/stack.component';
import { detailsRendered } from '../../../../settings/details.animation';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    StackComponent,
    TimerComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less',
  animations: [
    detailsRendered
  ]
})
export class DetailsComponent implements OnInit {
    activeProject$: Observable<any>;
    isStackReadyForRender$: Observable<any>;
    isProject$: Observable<any>;
    
    constructor(
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
        this.isProject$ = this.store.select(selectIsProject);
        this.activeProject$ = this.store.select(selectActiveProject);
        this.isStackReadyForRender$ = this.store.select(selectIsStackReadyForRender);
    }
}
