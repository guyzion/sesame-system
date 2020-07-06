import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId = 1234; 

  constructor(private http: HttpClient) { }

  login(id: string, password: string){
    this.http.post<any>('http://localhost:3000/users/login', {id, password}).subscribe(res => {
      console.log("logged!!!!!")
    })  
  }

}
