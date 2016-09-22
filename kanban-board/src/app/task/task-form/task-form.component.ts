import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() taskAdded = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addTask(){
    this.taskAdded.emit("todo: add task here");
  }
}
