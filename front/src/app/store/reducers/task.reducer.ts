import { Action, createReducer, on } from "@ngrx/store";
//import { FetchTasksSuccess, TaskActions, TaskActionsEnum } from "../actions/task.action";
import { initialTaskState, TaskState } from "../states/task.state";
import * as TaskActions from "../actions/task.action";


/*export const taskReducer = (
    state = initialTaskState,
    action: TaskActions | Action
): TaskState => {

    switch(action.type){
        case TaskActionsEnum.GetTasks: {
            return state
        }

        case TaskActionsEnum.FetchTasksSuccess: {
            return {
                ...state,
                tasks: (action as FetchTasksSuccess).payload
            }
        }

        case TaskActionsEnum.UpdateTask: {
            return state;
        }

        case TaskActionsEnum.DeleteTask: {
            return state;
        }

        default:
            return state;
    }

}*/

export const taskReducer =  createReducer<TaskState>(
    initialTaskState,

    on(TaskActions.fetchTasksSuccess,(state: TaskState, action): TaskState =>{
        return{
            ...state,
            tasks: action.payload
        }
    }),

    on(TaskActions.createTaskSuccess, (state, action): TaskState => ({
        ...state,
        tasks: [...state.tasks, action.payload]
    }))

)