import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
 

  name="";
  email="";
  dob="";
  count =0;
  condition=false;

  registerForm = new FormGroup({
    'nameForm': new FormControl(),
    'emailForm': new FormControl(),
    'dobForm': new FormControl()
  })
   constructor(){
    if(this.name=="" && this.email=="" && this.dob=="" ){
      this.condition=true;
    }else{
      this.condition=false;
    }
    
  }

  onClick(){
    console.log("hello world");
    this.name="";
    this.email="";
    this.dob="";
    
  }
  onSave(){
    this.count++;
    console.log(this.registerForm.value.nameForm);
    console.log(this.registerForm.value.dobForm);
    console.log(this.registerForm.value.emailForm);
    console.log(this.count)

  }
  onChange(newVal: string){
     this.condition=false;
     this.name=newVal
  }

 
}
