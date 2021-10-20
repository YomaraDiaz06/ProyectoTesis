import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-tecnico',
  templateUrl: './register-tecnico.component.html',
  styleUrls: ['./register-tecnico.component.css']
})
export class RegisterTecnicoComponent implements OnInit {

  //INICIALIZAR Y VALIDAR LOS CAMPOS DEL FORMULARIO
  //patron de validacion
  emailPattern: any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  signUpForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(30)]),
    email: new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    password_confirmation: new FormControl ('',[Validators.required,Validators.minLength(6)]),
    role: new FormControl('ROLE_TECNICO',[Validators.required])
  })
  errors = null;
  constructor(
    private router:Router,
    public authService: AuthService) { }
    
  ngOnInit(): void {
  }

  register(){

    this.authService.register(this.signUpForm.value).subscribe(
      result => {
        console.log(result)
      },
      error => {
        this.errors = error.error;
      },
      () => {
        this.signUpForm.reset()
      }
    )

  } 

}
