import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from './task-status';

@Pipe({name: 'WithStatus'})
export class TaskStatusFilter implements PipeTransform{
    transform(items: any[], args: any[]): any {
        return items.filter(item => item.status == args[0]);
    }
}