import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http : HttpClient) { }

  authenticateUser (data: any){

    return this.http.post('http://localhost:3000/users/login', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
