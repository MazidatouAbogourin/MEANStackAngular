import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HoverBackgroundDirective } from './todo-list/hover-background.directive';
import { TaskDetailComponent } from './todo-list/task-detail/task-detail.component';
import { FilterPipe } from './todo-list/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TodoListComponent,
    HoverBackgroundDirective,
    TaskDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
