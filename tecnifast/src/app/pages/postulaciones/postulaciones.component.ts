import { Component, OnInit } from '@angular/core';
import { GestionuserService, Solicitud } from 'src/app/services/gestionuser.service';

@Component({
  selector: 'app-postulaciones',
  templateUrl: './postulaciones.component.html',
  styleUrls: ['./postulaciones.component.css']
})
export class PostulacionesComponent implements OnInit {

  solicitudes= new Array();
  id= new Number;

  
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

  postular(id: number ){
    this.listSolicitudes.postularSolicitud(id).subscribe(
      resutl=>{
        console.log(resutl);
      }
    )
  }





}
