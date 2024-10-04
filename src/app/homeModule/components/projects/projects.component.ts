import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { selectActiveItemID, selectAllProjects } from '../../state/home-ui.selectors';
import { CommonModule } from '@angular/common';
import { projectCeded, projectRendered, projects } from '../../../../settings/projects.animations';
import { IProjectsModel } from '../../models/projects.model';
import { SetActiveItem } from '../../state/home-ui.actions';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less',
  animations: [
    projects,
    projectRendered,
    projectCeded,
  ]
})
export class ProjectsComponent implements OnInit {
    @Input() isHandheld: boolean;

    projects$: Observable<any>;
    activeItemID$: Observable<any>;

    get degree(): string {
        return this.isHandheld ? '25' : '45';
    }

    constructor(
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
        this.projects$ = this.store.select(selectAllProjects);
        this.activeItemID$ = this.store.select(selectActiveItemID);
    }

    handleItemClick(project: IProjectsModel): void {
        this.store.dispatch(SetActiveItem({ id: project.id, project, isProject: true }))
    }
}
