import { Component, Input } from "@angular/core";


@Component(
    {
        selector: 'app-task-list-detail',
        standalone: true,
        templateUrl: './task-list-detail.component.html',
        styleUrl: './task-list-detail.component.scss'
    }
)

class TaskListDetail {

    @Input() title!: string
}


export { TaskListDetail };