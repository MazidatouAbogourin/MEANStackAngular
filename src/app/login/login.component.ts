import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from './user-auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor (private userAuth : UserAuthService, private router: Router ){}
   loginForm = new FormGroup({
    username : new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  onSubmit(){
    console.log(this.loginForm.value);
    this.userAuth.authenticateUser(this.loginForm.value).subscribe((res: any) => {
      console.log('I authenticated ', res);
      localStorage.setItem('token' , res.access_token);
       this.loginForm.reset(); 
      this.router.navigate(['/dashboard']);
    

    });
  }

}
