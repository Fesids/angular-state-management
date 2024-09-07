import { AppState } from "../states/app.state";
import {createSelector} from "@ngrx/store"
import { TaskState } from "../states/task.state";

const selectTasks = (state: AppState) => state.tasks;

export const selectTasksList = createSelector(
    selectTasks,
    (state: TaskState) => state.tasks
)