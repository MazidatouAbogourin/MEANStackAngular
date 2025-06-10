import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    console.log(this.name);
    console.log(this.email);
    console.log(this.dob);
    console.log(this.count)

  }
  onNameChange(newVal: string){
     this.condition=false;
     this.name=newVal
  }
}
