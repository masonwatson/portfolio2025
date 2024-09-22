import { inject, Injectable } from "@angular/core";
import { AppState } from "../../app.state";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatLatestFrom } from "@ngrx/operators"
import { catchError, filter, from, interval, map, Observable, of, switchMap, takeUntil, tap, withLatestFrom } from "rxjs";
import { ProjectsService } from "../../../services/projects.service";
import { LoadProjects, LoadProjectsFailure, LoadProjectsSuccess, RemoveProject, SetActiveItem } from "./home-ui.actions";
import { selectActiveItemID, selectAllProjects } from "./home-ui.selectors";
import { IProjectsModel } from "../models/projects.model";

@Injectable()
export class HomeUIEffects {
    private actions$ = inject(Actions);

    loadProjects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadProjects),
            switchMap(() => 
                // call the get projects method and convert the data into an observable
                from(this.projectsService.getProjects()).pipe(
                    // return the value and the success action if successfull
                    map((projects) => LoadProjectsSuccess({projects: projects})),
                    // if it errors out, return a new failure action containing the error
                    catchError((error) => of(LoadProjectsFailure({ error })))
                )
            )
        )
    );

    reduceProjects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SetActiveItem),
            concatLatestFrom(() => [
                this.store.select(selectAllProjects),
            ]),
            tap(([{ id }, projects]) => {
                var projectsToRemove = [...projects].filter(project => project.id !== id);
                var timer = setInterval(() => {
                    const proj = projectsToRemove?.pop();
                    if (!!proj) {
                        this.store.dispatch(RemoveProject({ 
                            id: proj.id
                        }))
                    } else {
                        window.clearInterval(timer);
                    }
                }, 85);
            })
        ), {dispatch: false}
    );

    constructor(
        private readonly store: Store<AppState>,
        private readonly projectsService: ProjectsService,
    ) {}
}
