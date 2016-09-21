import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { TaskStatus } from '../task/task-status';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tasks: Array<Task>;
  public TaskStatus = TaskStatus;
  constructor() {
    this.tasks = [
                          new Task(1,'tasl1', 'task1 description', TaskStatus.New),
                          new Task(2,'tasl2', 'task2 description', TaskStatus.New),
                          new Task(3,'tasl3', 'task3 description', TaskStatus.New),
                          new Task(4,'tasl4', 'task4 description', TaskStatus.Dev),
                          new Task(5,'tasl2', 'task2 description', TaskStatus.Dev),
                          new Task(6,'tasl6', 'task6 description', TaskStatus.Test),
                          new Task(7,'tasl7', 'task7 description', TaskStatus.Deploy)
                      ];
  }

  ngOnInit() {
  }

}
