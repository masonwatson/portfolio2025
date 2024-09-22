import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { StackComponent } from '../stack/stack.component';
import { Observable, of } from 'rxjs';
import { selectIsStackReadyForRender } from '../../state/home-ui.selectors';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ResponsiveService } from '../../../../services/responsive.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    ProjectsComponent,
    StackComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {
    isStackReadyForRender$: Observable<any>;
    mediaBreakpoint$: Observable<any>;
    
    constructor(
        private store: Store<AppState>,
        private readonly responsiveService: ResponsiveService,
    ) { }

    ngOnInit() {
        this.isStackReadyForRender$ = this.store.select(selectIsStackReadyForRender);
        this.mediaBreakpoint$ = this.responsiveService.mediaBreakpoint$;
    }
}
