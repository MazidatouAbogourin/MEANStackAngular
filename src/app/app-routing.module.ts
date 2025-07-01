import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

const routes: Routes = [{path: 'registration', component: RegistrationComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'dashboard', component: AdminDashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
