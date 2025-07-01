import { Component } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, of, switchMap, map } from 'rxjs';
import { CheckUsernameService } from './check-username.service';
import { UsersApiService } from './users-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  
  displayPhone: boolean= false;
      phone: FormControl= new FormControl("", [Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/
), Validators.required] );
  registrationForm = new FormGroup({
    userName: new FormControl("", [ Validators.minLength(3), Validators.required], [this.customUserNameValidator('username')]),
    email: new FormControl("", [Validators.email, Validators.required], []),
    password: new FormControl("", [Validators.minLength(6), Validators.required]),
    confirmedPassword: new FormControl("", [Validators.minLength(6), Validators.required]),
    
    selectionParam: new FormControl("", []),
    

  },[this.customPasswordMatch('password','confirmedPassword' )],[])
  constructor(private checkUsername : CheckUsernameService, private userApi : UsersApiService){}

  get username(): FormControl{
    return <FormControl>this.registrationForm.get("userName");
  }

  get email(): FormControl{
    return <FormControl>this.registrationForm.get("email");
  }

  get password(): FormControl{
    return <FormControl>this.registrationForm.get("password");
  }
  get confirmedPassword(): FormControl{
    return <FormControl>this.registrationForm.get('confirmedPassword');
  }
 
  get selectionParam() : FormControl{
     return <FormControl>this.registrationForm.get('selectionParam');
  }

  onChange(newValue: any){
    if(newValue.target.value=="PhoneNumber"){
      this.displayPhone=true;
    }

  }


  customPasswordMatch(password: string, confirmed: string) : ValidatorFn{
    return  (control: AbstractControl): ValidationErrors | null=>{
      const password = control.get('password')?.value;
      const confirmedPassword = control.get('confirmedPassword')?.value;
      if(password  !== confirmedPassword){
        control.get('confirmedPassword')?.setErrors( {
          passwordMismatch: true
        });
        return {
          passwordMismatch: true
        }
      }
      else{
        return null
      }

    }
  }


  customUserNameValidator(username: string): AsyncValidatorFn{
    return (control: AbstractControl) : Observable<ValidationErrors|null>=>{

     return this.checkUsername.getUsers().pipe(
        map((users:any[])=>{ 
            const matches= users.filter(user => user.username.toLowerCase()=== control.value.toLowerCase())
            return matches.length >0 ? {usernameExists : true} :null;
            
         } ))

     }

  }

  onSubmit(){
   
    // console.log(this.registrationForm.valid)
    // console.log(this.registrationForm.value);
    // console.log(this.phone.errors);
    console.log(this.registrationForm.value);

    const data ={
      username: this.username.value,
      password: this.password.value,
      email: this.email.value,
      phoneNumber: this.phone.value ? this.phone.value : 1111111111,
      role: 'admin'
    }
   
    this.userApi.sendUser(data).subscribe(data=>console.log(data));
  }
}
