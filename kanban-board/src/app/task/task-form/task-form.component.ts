import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TaskStatus } from '../task-status';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() taskAdded = new EventEmitter();
  title: string;
  description: string;
  constructor() { }

  ngOnInit() {
  }

  addTask(){
    let task = new Task(1,this.title, this.description, TaskStatus.New);
    this.taskAdded.emit(task);
  }

  cancelAddTask(){

  }
}
