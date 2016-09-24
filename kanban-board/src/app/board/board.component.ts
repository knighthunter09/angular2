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
    .map(tasks =>  tasks.map(function(t) { 
                        return new Task(null, t.title, t.description, Task.statusFromString(t.status)); 
                   }))
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
              .map(res => res.json)
                .subscribe(t => console.log(t), 
                err => console.error("Error add "+err), 
                () => console.log('done'));;
    //this.tasks = Array.from(this.taskService.getTasks());//replace the whole array, so the ngFor with a pipe can be uodated
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks, 
                err => console.error("Error constructor "+err), 
                () => console.log('done'));
    this.taskFormOpen = false;
  }
}
