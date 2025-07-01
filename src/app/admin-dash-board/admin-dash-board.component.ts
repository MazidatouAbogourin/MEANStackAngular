import { Component, OnInit } from '@angular/core';
import { GetAService } from './get-a.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrl: './admin-dash-board.component.scss'
})
export class AdminDashBoardComponent implements OnInit {
  users : any =[]
  constructor(private getData: GetAService){}
  ngOnInit(): void {
    
    this.getData.getAllUsers().subscribe(data=> {

      this.users =data
    });
  }

}
