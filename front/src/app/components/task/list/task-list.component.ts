import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../../../store/models/task.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/states/app.state";
import { selectTasksList } from "../../../store/selectors/task.selector";
import { TaskCreateComponent } from "../create/task-create.component";
import { TaskListDetail } from "../list-detail/task-list-detail.component";


@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [CommonModule, TaskCreateComponent, TaskListDetail],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{



    task$!: Observable<Task[]>;

    constructor(private store: Store<AppState>){}

    ngOnInit(): void {
        this.task$ = this.store.select(selectTasksList);
        
    }
    
}