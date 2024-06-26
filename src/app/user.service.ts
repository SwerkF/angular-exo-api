import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // https://dummyjson.com/users
  getUsers() {
    return this.http.get('https://dummyjson.com/users');
  }
  
}
