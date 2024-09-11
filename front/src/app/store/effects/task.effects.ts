import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../../services/task.service";
import * as TaskActions from "../actions/task.action";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, throwError } from "rxjs";
import { Task } from "../models/task.model";


@Injectable({
    providedIn: 'root'
})
export class TaskEffects {

    constructor(private action$: Actions, private taskService: TaskService, private store: Store){}

    fetchTasks = createEffect(() => 
        this.action$.pipe(
            ofType(TaskActions.getTasks),
            mergeMap(() => 
                this.taskService.getTasks().pipe(
                    map((data) => TaskActions.fetchTasksSuccess({payload: data})),
                    catchError((err) => of({ type: '[Task] Fetch Tasks Failure', error: err }))
                )
            )
        )
    )

    createTask = createEffect(() => 
        this.action$.pipe(
            ofType(TaskActions.createTask),
            mergeMap(action => 
                this.taskService.createTask(action.newTask)
                .pipe(
                    map((task: Task) => TaskActions.createTaskSuccess({payload: task})),
                    catchError((err) => of(TaskActions.createTaskFailure({error: err})))
                )
            )
        )
    )

}