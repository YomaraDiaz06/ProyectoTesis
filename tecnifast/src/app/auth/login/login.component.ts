import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors=null;


  myFormUser=new FormGroup({
    email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])

  })

  constructor(
    private router:Router,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.authService.userAuth().subscribe(
      result=>{
        console.log('user', result);

      }
    );
  }

 loginUser(){
   this.authService.signin(this.myFormUser.value).subscribe(
    result => {
      console.log('user', result);
      localStorage.setItem('auth_token', result.token);
      const role=result.user.role;
      console.log('role logueado', role);
      
      
    },
    error => {
      this.errors = error.error;
    },
    ()=>{
      this.router.navigate(['/perfil']);
    }
   )
  }


}
