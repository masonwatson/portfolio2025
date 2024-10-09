import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { StackComponent } from '../stack/stack.component';
import { map, Observable, of, Subscription } from 'rxjs';
import { selectThereIsActiveItem, selectIsStackReadyForRender, selectIsProject } from '../../state/home-ui.selectors';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ResponsiveService } from '../../../../services/responsive.service';
import { HeaderComponent } from '../header/header.component';
import { TypewriterService } from '../../../../services/typewriter.service';
import { headerRendered } from '../../../../settings/header.animation';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    StackComponent,
    DetailsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  animations: [
    headerRendered
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
    thereIsActiveItem$: Observable<any>;
    isStackReadyForRender$: Observable<any>;
    typedText$: Observable<any>;
    isProject$: Observable<any>;

    private _subMediaBreakpoint: Subscription;
    protected isHandheld: boolean;
    
    constructor(
        private store: Store<AppState>,
        private readonly responsiveService: ResponsiveService,
        private readonly typewriterService: TypewriterService,
    ) { }

    ngOnInit() {
        this.isProject$ = this.store.select(selectIsProject);
        this.thereIsActiveItem$ = this.store.select(selectThereIsActiveItem);
        this.isStackReadyForRender$ = this.store.select(selectIsStackReadyForRender);

        this._subMediaBreakpoint = this.responsiveService.mediaBreakpoint$.subscribe((mediaBreakpoint) => {
            this.isHandheld = ['subTablet', 'subSmallTablet', 'subMobile'].includes(mediaBreakpoint ?? "");
        })

        this.typedText$ = this.typewriterService
            .getTypewriterEffect()
            .pipe(map((text) => text));
    }

    ngOnDestroy() {
        this._subMediaBreakpoint.unsubscribe();
    }
}
