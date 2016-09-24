import { TaskStatus } from './task-status';
export class Task {
    constructor(public id:number,
                public title: string,
                public description: string,
                public status: TaskStatus){}

    static statusFromString(statusStr: string) : TaskStatus{
        switch(statusStr){
            case "New": return TaskStatus.New
            case "Dev": return TaskStatus.Dev
            case "Test": return TaskStatus.Test
            case "Deploy": return TaskStatus.Deploy 
            default: return TaskStatus.New
        };
    }
}