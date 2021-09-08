import { Component, OnInit } from '@angular/core';
import { GestionuserService } from 'src/app/services/gestionuser.service';

@Component({
  selector: 'app-postulaciones',
  templateUrl: './postulaciones.component.html',
  styleUrls: ['./postulaciones.component.css']
})
export class PostulacionesComponent implements OnInit {

  solicitudes= new Array();
  soli=Object.values(this.solicitudes);
  
  constructor(
    private listSolicitudes: GestionuserService,
  ) { }

  ngOnInit(): void {
    this.solicitudSinAsig();
  }

  solicitudSinAsig(){
    this.listSolicitudes.soliSinAsignar().subscribe(
      data=>{
        console.log(data);
        this.solicitudes = data.data;
        console.log('arreglo', this.solicitudes);
      }
      
    );
    

  }

}

