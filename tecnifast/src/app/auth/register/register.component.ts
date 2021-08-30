import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //INICIALIZAR Y VALIDAR LOS CAMPOS DEL FORMULARIO
  //patron de validacion
  emailPattern: any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  signUpForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(30)]),
    email: new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    password_confirmation: new FormControl('',[Validators.required,Validators.minLength(6)]),
    role: new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  error: null;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
/*REGISTRO
public signUpForm = new FormGroup({
  email: new FormControl('',  Validators.required),
  password: new FormControl('',  Validators.required),
});*/

  
  register(){

    this.Jarwis.signup(this.signUpForm).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  } 

  handleResponse(data: Object) {
    this.Token.handle(data.toLocaleString);
    this.router.navigateByUrl('/information');
  }

  handleError(errors: any) {
    this.error = errors;
  }

}
