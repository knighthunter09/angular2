import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { TaskStatus } from '../task/task-status';
import { TaskService } from '../task/task.service';
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
    this.tasks = taskService.getTasks();
  }

  ngOnInit() {
  }

  showTaskForm(){
    this.taskFormOpen = true;
  }

  taskAddedHandler(){
    this.taskFormOpen = false;
  }
}
