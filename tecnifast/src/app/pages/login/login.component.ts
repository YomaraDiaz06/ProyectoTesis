import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultado:string | undefined;


  myFormUser=new FormGroup({
    usuarioF: new FormControl('',[Validators.required]),
      passwordF: new FormControl('',[Validators.required])

  })

  constructor(public servicesAuth:FirebaseauthService, private router:Router) { }

  ngOnInit(): void {

  }

  loginUser(){
    let {usuarioF,passwordF} = this.myFormUser.value;
    this.servicesAuth.login(usuarioF,passwordF);
    console.log(usuarioF);
    this.router.navigate(['/information'])
    
  }

  goRegister(){
    this.router.navigate(['/register'])
  }

}
