import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: any, searchTask: string): any {
    console.log(searchTask);
    console.log(tasks);
    if(!tasks || !searchTask){
      return tasks
    }
    searchTask = searchTask.toLowerCase();
    console.log(tasks[0].status.toLowerCase());
    return tasks.filter((task:any)=>task.status.toLowerCase() == searchTask.toLowerCase() );
    
  
  }

}
