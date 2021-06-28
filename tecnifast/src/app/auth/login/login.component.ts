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
  
  
  resultado : string | undefined;

  myFormUser=new FormGroup({
    usuarioF: new FormControl('',[Validators.required]),
      passwordF: new FormControl('',[Validators.required])

  })

  private formSubmitAttempt: boolean | undefined;

  constructor(public servicesauth:FirebaseauthService, private router:Router) { }

  ngOnInit(): void {
  }

  async loginUser(){

    let {usuarioF,passwordF} = this.myFormUser.value;
    const user = await this.servicesauth.loginUser(usuarioF,passwordF)
    this.formSubmitAttempt = true;
    if(user){

      this.router.navigate(['/dashboard'])
    }
    else{
      this.resultado="usuario incorrecto"
      console.log(this.resultado);
    }

  }

  async onLoginGoogle(){
    try{
      const user = await this.servicesauth.loginGoogle();
      if(user){
        this.router.navigate(['/dashboard'])
      }

    }catch(error){
      console.log(error);
    }
  }

  //validacion de campos

}
