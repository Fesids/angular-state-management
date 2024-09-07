import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Task } from "../store/models/task.model";
import { ApiService } from "../http/api.service";


@Injectable({providedIn: 'root'})
export class TaskService{

    private readonly apiService = inject(ApiService);

    getTasks(): Observable<Task[]>{
        return this.apiService.get<Task[]>("/tasks")
        .pipe(
            tap(data => console.log(JSON.stringify(data)))
        )
    }


}