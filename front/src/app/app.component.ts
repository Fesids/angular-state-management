import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/states/app.state';
import * as TaskActions from "../app/store/actions/task.action"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(TaskActions.getTasks())
  }
  title = 'NgRx-Project';

  //Practing Signals
  count = signal(1);

  increment(): void {
    this.count.update((count: number) => {
      return count + 1;
    });
  }

  //Practing @defer
  isVisible: boolean = false;
}
