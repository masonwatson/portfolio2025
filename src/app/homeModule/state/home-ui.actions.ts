import { createAction, props } from "@ngrx/store";
import { IProjectsModel } from "../models/projects.model";

export const LoadProjects = createAction(
    '[HOME] LoadProjects'
);

export const LoadProjectsSuccess = createAction(
    '[HOME] LoadProjectsSuccess',
    props<{ projects: IProjectsModel[] }>()
);

export const LoadProjectsFailure = createAction(
    '[HOME] LoadProjectsFailure',
    props<{ error: string }>()
);

export const SetActiveItem = createAction(
    '[HOME] SetActiveItem',
    props<{ id: string; project: IProjectsModel; isProject: boolean }>()
);

export const ClearActiveItem = createAction(
    '[HOME] ClearActiveItem'
);

export const RemoveProject = createAction(
    '[HOME] RemoveProject',
    props<{ id: string }>()
)