import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';
import { TaskStatus } from '../task-status';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() taskAdded = new EventEmitter();
  addTaskForm = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });
  submitted: boolean = false; //for the validation message

  constructor() { 
  }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if(this.addTaskForm.valid){
      let task = new Task(null,this.addTaskForm.value.title, this.addTaskForm.value.description, TaskStatus.New);
      this.taskAdded.emit(task);
    }
  }

}
