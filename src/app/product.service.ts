import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }

  getData(){
    return this.http.get('https://dummyjson.com/products');

  }

  deleteData(id:any){
    return this.http.delete(`https://dummyjson.com/products/${id}`);
  }

  updateDta(id:any){
    return this.http.delete(`https://dummyjson.com/products/${id}`);
  }
}
