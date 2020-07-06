import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      id: ['',Validators.required],
      password: ['', Validators.required],
    })
  }

  login(){
    console.log("hi");
    this.authService.login(this.loginForm.controls.id.value, this.loginForm.controls.password.value);
  }

}
