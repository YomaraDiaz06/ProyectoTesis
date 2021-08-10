import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultado!: string;


  myFormUser=new FormGroup({
    usuarioF: new FormControl('',[Validators.required]),
      passwordF: new FormControl('',[Validators.required])

  })

  private formSubmitAttempt: boolean = false;

  constructor(public servicesauth:FirebaseauthService, private router:Router) { }

  ngOnInit(): void {
  }

 loginUser(){

    let {usuarioF,passwordF} = this.myFormUser.value;
    this.servicesauth.login(usuarioF,passwordF)
    console.log(usuarioF)

  }
//LOGIN GOOGLE
 /*  async onLoginGoogle(){
    try{
      const user = await this.servicesauth.loginGoogle();
      if(user){
        this.router.navigate(['/dashboard'])
      }

    }catch(error){
      console.log(error);
    }
  } */

  //validacion de campos

}
