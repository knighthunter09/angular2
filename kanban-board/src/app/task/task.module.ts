import { NgModule } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskStatusFilter } from './task-status-filter';
import { TaskStatus } from './task-status';
import { TaskService } from './task.service';

import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { TaskFormComponent } from './task-form/task-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskCardComponent, TaskStatusFilter, TaskFormComponent],
  imports: [MdCardModule, MdInputModule, ReactiveFormsModule],
  providers: [TaskService],
  exports: [TaskCardComponent, TaskStatusFilter, TaskFormComponent]
})
export class TaskModule{}