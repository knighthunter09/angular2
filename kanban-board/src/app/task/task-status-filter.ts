import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from './task-status';

@Pipe({name: 'WithStatus'})
export class TaskStatusFilter implements PipeTransform{
    transform(value: any, ...args: any[]): any {
        return value.filter(item => item.status == args[0]);
    }
}