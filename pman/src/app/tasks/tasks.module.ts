import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TasksComponent],
  declarations: [TasksComponent]
})
export class TasksModule { }
