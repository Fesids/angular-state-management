import { Component, OnDestroy, OnInit } from "@angular/core";
import { TaskListComponent } from "../../components/task/task-list.component";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [TaskListComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

    constructor(){}

    ngOnDestroy(): void {
        
    }
    ngOnInit(): void {
        
    }
    
}