import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseauthService, } from 'src/app/services/firebaseauth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //INICIALIZAR Y VALIDAR LOS CAMPOS DEL FORMULARIO
  //patron de validacion
  emailPattern: any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  myFormUser=new FormGroup({
    emailF: new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    passwordF: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  constructor(private serviceAuth: FirebaseauthService, private router: Router,private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  registerUser(){

    if(this.myFormUser.valid){

    let {emailF,passwordF} = this.myFormUser.value;
    this.serviceAuth.registerUser(emailF,passwordF);
    this.router.navigate(['/login'])

    }else{
      console.log("error");

    }

  }

  async onLoginGoogle(){
    try{
      const user = await this.serviceAuth.loginGoogle();
      if(user){
        this.router.navigate(['/dashboard'])
      }

    }catch(error){
      console.log(error);
    }
  }

  get emailF() {return this.myFormUser.get('emailF')}
  get passwordF() {return this.myFormUser.get('passwordF')}

 
}
