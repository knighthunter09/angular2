import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { TaskStatus } from '../task/task-status';
import { TaskService } from '../task/task.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tasks: Observable<Task>;
  taskFormOpen: boolean = false;
  public TaskStatus = TaskStatus;
  constructor(private taskService:TaskService) {
    taskService.getTasks()
    .map(res => res.json())
    .subscribe(t => {console.log("sub:");console.log(t._embedded.tasks); this.tasks = t._embedded.tasks }, 
                err => console.error("Error constructor "+err), 
                () => console.log('done'));
  }

  ngOnInit() {
  }

  showTaskForm() {
    this.taskFormOpen = true;
  }

  taskAddedHandler(task: Task) {
    this.taskService.addNewTask(task)
              .map(res => res.json)
                .subscribe(t => console.log(t), 
                err => console.error("Error add "+err), 
                () => console.log('done'));;
    //this.tasks = Array.from(this.taskService.getTasks());//replace the whole array, so the ngFor with a pipe can be uodated
    this.taskService.getTasks()
    .map(res => res.json())
    .subscribe(t => {console.log("sub:");console.log(t); this.tasks = t}, 
                err => console.error("Error get "+err), 
                () => console.log('done'));
    this.taskFormOpen = false;
  }
}
