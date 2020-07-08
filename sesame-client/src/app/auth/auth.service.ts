import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  isLogged = false;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(id: string, password: string){
    this.http.post(this.baseUrl+'/users/login', {id, password}).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        this.isLogged = true;
        this.router.navigateByUrl('/');
      },
      error => {
        console.log("error");
      }
    )
  }

}
