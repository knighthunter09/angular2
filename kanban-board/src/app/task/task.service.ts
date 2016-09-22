import { Task } from './task';
import { TaskStatus } from './task-status';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
    private tasks:Array<Task>;
    constructor(){
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
    getTasks() {
        return this.tasks;
    }
    addNewTask(task: Task){
        this.tasks.push(task);
        //this.tasks = this.tasks.concat(task);
    }
}