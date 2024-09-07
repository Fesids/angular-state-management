import { Action } from "@ngrx/store";
import { initialTaskState, TaskState } from "../states/task.state";
import { Task } from "../models/task.model";

/*
export enum TaskActionsEnum {
    GetTasks = '[Task] Get Tasks',
    FetchTasksSuccess = '[Task] Fetch Tasks Success',
    UpdateTask = '[Task] Update Task',
    DeleteTask = '[Task] Delete Task',
    CreateTask = '[Task] Create Task'
}

export class GetTasks implements Action {
    public readonly type = TaskActionsEnum.GetTasks;
}

export class FetchTasksSuccess implements Action {
    public readonly type = TaskActionsEnum.FetchTasksSuccess;
    constructor(public payload: Task[]) { }
}

export class UpdateTask implements Action {
    public readonly type = TaskActionsEnum.UpdateTask;
    constructor(public payload: Task | undefined | null) { }
}

export class DeleteTask implements Action {
    public readonly type = TaskActionsEnum.DeleteTask;
    constructor(public payload: Task | undefined | null) { }
}

export class CreateTask implements Action {
    public readonly type = TaskActionsEnum.CreateTask;
    constructor(public payload: { description: string, createdAt: string }) { }
}

export type TaskActions = GetTasks | FetchTasksSuccess | UpdateTask | DeleteTask | CreateTask;

*/

import { createAction, props } from '@ngrx/store';


export const getTasks = createAction('[Task] Get Tasks');
export const fetchTasksSuccess = createAction('[Task] Fetch Tasks Success', props<{ payload: Task[] }>());
export const updateTask = createAction('[Task] Update Task', props<{ payload: Task | undefined | null }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ payload: Task | undefined | null }>());
export const createTask = createAction('[Task] Create Task', props<{ payload: { description: string, createdAt: string } }>());

