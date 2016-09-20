import { NgModule } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';

import { MdCardModule } from '@angular2-material/card';

@NgModule({
  declarations: [TaskCardComponent],
  imports: [MdCardModule],
  providers: []
})
export class TaskModule{}