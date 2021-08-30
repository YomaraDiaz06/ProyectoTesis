import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultado!: string;


  myFormUser=new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])

  })

  private formSubmitAttempt: boolean = false;
  errors = null;
  error: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,){}

  ngOnInit(): void {
  }

 loginUser(){
  this.Jarwis.login(this.m).subscribe(
    data => this.handleResponse(data),
    error => this.handleError(error)
  );
     }
  m(m: any) {
    throw new Error('Method not implemented.');
  }

  handleResponse(data: Object) {
      this.Token.handle(data.toLocaleString);
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/profile');
  }
  
    handleError(error: { error: { error: any; }; }) {
      this.error = error.error.error;
    }
 
}
