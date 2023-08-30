import { Component } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tasks!: Itask[];

  constructor(private taskService: TasksService){
    taskService.getTasks().subscribe({ 
      next: (results) =>{
        this.tasks = results;
      },
      error: (err)=> {
        console.log(err);
      }
    });
  }

}
