import { Action, createAction, props } from "@ngrx/store";
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

// Task Actions
export const getTasks = createAction('[Task] Get Tasks');
export const fetchTasksSuccess = createAction('[Task] Fetch Tasks Success', props<{ payload: Task[] }>());
export const fetchTasksFailure = createAction('[Task] Fetch Tasks Failure', props<{ error: any }>());

export const updateTask = createAction('[Task] Update Task', props<{ payload: Task | undefined | null }>());
export const updateTaskSuccess = createAction('[Task] Update Task Success', props<{ payload: Task }>());
export const updateTaskFailure = createAction('[Task] Update Task Failure', props<{ error: any }>());

export const deleteTask = createAction('[Task] Delete Task', props<{ payload: Task | undefined | null }>());
export const deleteTaskSuccess = createAction('[Task] Delete Task Success', props<{ payload: Task }>());
export const deleteTaskFailure = createAction('[Task] Delete Task Failure', props<{ error: any }>());

export const createTask = createAction('[Task] Create Task', props<{ newTask: Omit<Task, "id">}>());
export const createTaskSuccess = createAction('[Task] Create Task Success', props<{ payload: Task }>());
export const createTaskFailure = createAction('[Task] Create Task Failure', props<{ error: any }>());
