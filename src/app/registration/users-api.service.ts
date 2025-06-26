import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http : HttpClient) {  
   
  }


   sendUser(data: any) {
  return this.http.post('http://localhost:3000/users/register', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
}
