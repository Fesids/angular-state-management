import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/states/app.state";
import { Router } from "@angular/router";
import { Task } from "../../../store/models/task.model";
import { createTask } from "../../../store/actions/task.action";


@Component({
    standalone: true,
    selector: "app-create-task",
    templateUrl: "./task-create.component.html",
    styleUrl: "./task-create.component.scss"
})
export class TaskCreateComponent implements OnInit{

    constructor(private store:Store, private app: Store<AppState>, private router: Router){}

    taskForm: Omit<Task, "id"> = {
        title: "Teste angular",
        description: "Teste desc",
        completed: false
    }

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }
    

    save(){
        this.store.dispatch(createTask({newTask: this.taskForm}));

    }

}