import { createReducer, on } from "@ngrx/store";
import { IProjectsModel } from "../models/projects.model";
import { ClearActiveItem, LoadProjects, LoadProjectsFailure, LoadProjectsSuccess, RemoveProject, SetActiveItem } from "./home-ui.actions";

export interface HomeUIState {
    projects: IProjectsModel[];
    activeItemID: string | null;
    activeProject: IProjectsModel | undefined;
    hoveredProjectID: string | null;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: HomeUIState = {
    projects: [],
    activeItemID: null,
    activeProject: undefined,
    error: null,
    hoveredProjectID: null,
    status: 'pending',
};

export const homeUIReducer = createReducer(
    // supply the initial state
    initialState,

    // trigger the load of the projects
    on(LoadProjects, (state) => ({
        ...state,
        status: 'loading' as const
    })),

    // handle successfully loaded projects
    on(LoadProjectsSuccess, (state, { projects }) => ({
        ...state,
        projects: projects
    })),

    // handle projects load failure
    on(LoadProjectsFailure, (state, { error }) => ({
        ...state,
        error: error
    })),

    // set the active item, whether it be a project or a nav item
    on(SetActiveItem, (state, {id, project}) => ({
        ...state,
        activeItemID: id,
        activeProject: project
    })),

    // handle clear of the current active item
    on(ClearActiveItem, (state) => ({
        ...state,
        activeItemID: null,
        activeProject: undefined
    })),
    
    on(RemoveProject, (state, {id}) => ({
        ...state,
        projects: [...state.projects.filter(project => project.id !== id)]
    }))
)