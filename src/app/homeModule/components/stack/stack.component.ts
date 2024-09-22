import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectActiveProject } from '../../state/home-ui.selectors';
import { stack, techRendered } from '../../../../settings/stack.animations';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.less',
  animations: [
    stack,
    techRendered
  ]
})
export class StackComponent implements OnInit {
    activeItem$: Observable<any>;

    constructor(
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
        this.activeItem$ = this.store.select(selectActiveProject);
    }
}
