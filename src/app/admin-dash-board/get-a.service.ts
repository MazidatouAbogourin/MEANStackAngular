import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
   return  this.http.get('http://localhost:3000/users/all', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })

      
    })
  
 
  }
}
