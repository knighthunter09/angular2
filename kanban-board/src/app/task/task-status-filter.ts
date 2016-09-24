import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from './task-status';

@Pipe({ name: 'WithStatus', pure: true })
export class TaskStatusFilter implements PipeTransform{
    transform(value: any, ...args: any[]): any {
        console.log(value);
        return value.filter(item => item.status == args[0]);
    }
}