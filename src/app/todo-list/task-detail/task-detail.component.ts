import { Component, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  isOpen = false;

  @Input() task: any;
  taskForm!: FormGroup;

  onAdded(){
    if(this.isOpen){
      this.isOpen=false;
    }

    else{
       this.isOpen= true;
      this.onForm();
    }
   
  }

  onForm(){
    this.taskForm= new FormGroup(
      {
        
        title: new FormControl(this.task.title, [Validators.required] ),
        description: new FormControl(this.task.description, [Validators.required]),
        dueDate: new FormControl(this.task.dueDate, [Validators.required]),
        status: new FormControl(this.task.status), 
        priority: new FormControl(this.task.priority)


    
    })
  }

  onEdited(){
    console.log(this.taskForm.value);
    this.task=this.taskForm.value;
    window.alert("you have successfully updated")
    this.isOpen=false;
  }
}
