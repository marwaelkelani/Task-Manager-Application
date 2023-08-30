import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { 


  }

  getTasks(){
    return this.http.get<Itask[]>('https://pacific-vault-395000.uw.r.appspot.com/tasks');
  }

  createTask(formData: any){
    return this.http.post<Itask>('https://pacific-vault-395000.uw.r.appspot.com/tasks', formData);
  }

  getTask(taskId: number){
    return this.http.get<Itask>(`https://pacific-vault-395000.uw.r.appspot.com/tasks/${taskId}`);
  }

  updateTask(formData: any, taskId: number){
    return this.http.put<Itask>(`https://pacific-vault-395000.uw.r.appspot.com/tasks/${taskId}`, formData);
  }

}
