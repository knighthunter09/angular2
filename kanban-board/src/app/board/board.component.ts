import { Component, OnInit } from '@angular/core';
import { Task } from '../domain/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  freshTasks: Array<Task>;
  constructor() {
    this.freshTasks = [
                          new Task(1,'tasl1', 'task1 description'),
                          new Task(2,'tasl2', 'task2 description'),
                          new Task(3,'tasl3', 'task3 description')
                      ];
  }

  ngOnInit() {
  }

}
