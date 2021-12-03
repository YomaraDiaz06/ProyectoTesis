import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GestionuserService } from 'src/app/services/gestionuser.service';
import { Estado, Estudios, TecnicoInterface } from 'src/app/interfaces/tecnico';

@Component({
  selector: 'app-register-tecnico',
  templateUrl: './register-tecnico.component.html',
  styleUrls: ['./register-tecnico.component.css']
})
export class RegisterTecnicoComponent implements OnInit {

  estudios: Estudios={
    egresado:'',
    ingeniero:'',
    tecnologo:''
  }

  estado: Estado={
    registrado:'Registrado',
    sinRegistrar:''
  }
  tecnico: TecnicoInterface={
    id:0,
    name:'',
    email:'',
    telefono:'',
    descripcion:'',
    direccion:'',
    estudios: this.estudios,
  }
  
  //INICIALIZAR Y VALIDAR LOS CAMPOS DEL FORMULARIO
  //patron de validacion
  emailPattern: any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  signUpForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(30)]),
    email: new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    password_confirmation: new FormControl ('',[Validators.required,Validators.minLength(6)]),
    role: new FormControl('TECNICO',[Validators.required])
  })

/*tecnicoForm = new FormGroup({
    name: new FormControl (this.tecnico.name,[Validators.required]),
    email: new FormControl (this.tecnico.email,[Validators.required]),
    telefono: new FormControl (this.tecnico.telefono,[Validators.required]),
    descripcion: new FormControl(this.tecnico.descripcion,[Validators.required]),
    direccion: new FormControl(this.tecnico.direccion,[Validators.required]),
    estudios: new FormControl(this.tecnico.estudios,[Validators.required]),
    estado: new FormControl('Registrado',[Validators.required])
  })*/
  errors = null;
  postulaciones= new Array();
  constructor(
    private router:Router,
    private authService: AuthService,
    public usuarios: GestionuserService
    ) { }
    
  ngOnInit(): void {
    this.listPostulaciones();
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
  
  async listPostulaciones(){
    this.usuarios.listPostulacionTecnicos().subscribe(
      data=>{
        console.log(data);
        this.postulaciones = data.data;
        console.log('arreglo', this.postulaciones);
      }
    )

  }

  

}
