/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { TaskService } from '../task/task.service';

describe('Component: Board', () => {
  it('should create an instance', () => {
    let component = new BoardComponent(new TaskService());
    expect(component).toBeTruthy();
  });
});
