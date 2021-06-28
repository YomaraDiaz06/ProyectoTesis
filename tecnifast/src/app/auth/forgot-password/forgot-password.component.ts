import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email=new FormControl('',[Validators.required]);

  constructor(private fAuth:FirebaseauthService, private route:Router) { }

  ngOnInit(): void {
  }


    async onReset(){
      try{
        const emailU=this.email.value;
        await this.fAuth.resetPassword(emailU);
        window.alert("Email enviado, revise su correo")
        this.route.navigate(['/login'])

      }catch(error){
        console.log("error", error)
      }


    }



}
