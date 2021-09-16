import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionuserService } from 'src/app/services/gestionuser.service';


@Component({
  selector: 'app-postulationtechnical',
  templateUrl: './postulationtechnical.component.html',
  styleUrls: ['./postulationtechnical.component.css']
})
export class PostulationtechnicalComponent implements OnInit {

  formTrabajaNos = new FormGroup({
    name: new FormControl ('',[Validators.required]),
    email: new FormControl ('',[Validators.required]),
    telefono: new FormControl ('',[Validators.required]),
    descripcion: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    estudios: new FormControl('',[Validators.required])
  })
  constructor(
    private usuarios: GestionuserService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.usuarios.trabajaNosotors(this.formTrabajaNos.value).subscribe(
      result=>{
        console.log(result);
        this.formTrabajaNos.reset();
        
      }
    )
  }

}
