import { createSelector } from "@ngrx/store";
import { AppState } from "../../app.state";
import { HomeUIState } from "./home-ui.reducer";

export const selectHomeUI = (state: AppState) => state.homeUI;

export const selectAllProjects = createSelector(
    selectHomeUI,
    (state: HomeUIState) => state.projects
)

export const selectActiveItemID = createSelector(
    selectHomeUI,
    (state: HomeUIState) => state.activeItemID
)

export const selectActiveProject = createSelector(
    selectHomeUI,
    (state: HomeUIState) => state.activeProject
)

export const selectIsStackReadyForRender = createSelector(
    selectHomeUI,
    (state: HomeUIState) => {
        return state.projects.length <= 1;
    }
)