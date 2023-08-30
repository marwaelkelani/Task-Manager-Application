import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  taskForm!: FormGroup
  isEdit: boolean = false;
  editId: number = 0;
  
    constructor(private fb: FormBuilder, private taskService: TasksService, private route: ActivatedRoute, private alertController: AlertController ){
      this.taskForm = fb.group({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        category: ['', [Validators.required]],
        task_date: ['', [Validators.required]],
        priority_level: ['', [Validators.required]],
        progress_level: ['', [Validators.required]]
      });
  
      //Get task id from url
      let taskId = route.snapshot.paramMap.get('task_id');
      console.log(taskId);
  
      //Edit Mode
      if(taskId !==null){
        this.isEdit = true;
        this.editId = parseInt(taskId);
  
        //Get task from DB and pre-populate the form with the data
        taskService.getTask(this.editId).subscribe({
          next: (result)=>{
            this.taskForm.patchValue(result); //populate form with task data
          },
          error: (err)=>{
            console.log('Something went wrong');
          }
        });
      }
      
  
    }
  
    onSubmit(){
      console.log(this.taskForm.value);
      if(this.isEdit){
        this.editTask()
      } else {
        this.createTask()
      }
      
      }
  
      createTask(){
        this.taskService.createTask(this.taskForm.value).subscribe({
          next: (result)=>{
             this.showAlert('Success', 'Task as created successfully.');
              this.taskForm.reset();
          },
         error: (err)=>{
          console.log(err);
          this.showAlert('Error', 'Something went wrong');
         }     
        })
      }
  
      editTask(){
        this.taskService.updateTask(this.taskForm.value, this.editId).subscribe({
          next: (result)=>{
              this.showAlert('Success','Task as updated successfully.');
              this.taskForm.reset();
          },
         error: (err)=>{
          console.log(err);
          this.showAlert('Error','Something went wrong');
         }     
        })
      }
  
      get task_date(){
        return this.taskForm.get('task_date')!;
      }

      async showAlert(title:string, message:string) {
        const alert = await this.alertController.create({
          header: title,
          message: message,
          buttons: ['OK'],
        });
    
        await alert.present();
      }


}
