import { Task } from './task';
import { TaskStatus } from './task-status';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {
    constructor(private http: Http){
    }
    getTasks() {
        return this.http.get('http://localhost:8080/tasks')
            .map(res => res.json()).map(rest => rest._embedded.tasks)
            .map(tasks =>  tasks.map(function(t) { 
                        return new Task(null, t.title, t.description, Task.statusFromString(t.status)); 
                   }));
    }
    addNewTask(task: Task){
        return this.http.post('http://localhost:8080/tasks',task);
    }
}