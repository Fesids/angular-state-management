import {isDevMode} from "@angular/core";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../states/app.state";
import { taskReducer } from "./task.reducer";


export const reducers: ActionReducerMap<AppState> = {
    tasks: taskReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode()? [] : []