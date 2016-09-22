import { NgModule } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskStatusFilter } from './task-status-filter';
import { TaskStatus } from './task-status';
import { TaskService } from './task.service';

import { MdCardModule } from '@angular2-material/card';

@NgModule({
  declarations: [TaskCardComponent, TaskStatusFilter],
  imports: [MdCardModule],
  providers: [TaskService],
  exports: [TaskCardComponent, TaskStatusFilter]
})
export class TaskModule{}