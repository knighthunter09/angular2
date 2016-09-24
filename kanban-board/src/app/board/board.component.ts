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
  tasks: Array<Task>;
  taskFormOpen: boolean = false;
  public TaskStatus = TaskStatus;
  constructor(private taskService:TaskService) {
    taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks, 
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
                    .flatMap(res => this.taskService.getTasks())
                    .subscribe(tasks => this.tasks = tasks);
    this.taskFormOpen = false;
  }

  addTaskCanceled(){
    this.taskFormOpen = false;
  }
}
