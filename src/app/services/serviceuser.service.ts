import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

  url='https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<any>(`${this.url}`);
  }
}
