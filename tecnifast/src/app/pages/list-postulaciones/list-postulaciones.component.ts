import { Component, OnInit } from '@angular/core';
import { ROLE, UserInterface } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { GestionuserService } from 'src/app/services/gestionuser.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-list-postulaciones',
  templateUrl: './list-postulaciones.component.html',
  styleUrls: ['./list-postulaciones.component.css']
})
export class ListPostulacionesComponent implements OnInit {

  role:ROLE={
    cliente:'',
    tecnico:'',
  }
  user: UserInterface={
    id: 0,
    email:'',
    name:'',
    role:this.role,
  }
  postulaciones= new Array();
  constructor(
    private usuarios: GestionuserService,
    private authService: AuthService,
    private ngModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.authService.userAuth().subscribe(
      result=>{
        console.log('user', result);
        this.user.id=result.id;
        this.postulacionUser(result.id);
      }
    );
  }

  postulacionUser(id: number){
    this.usuarios.myPostulacion(id).subscribe(
      data=>{
        console.log(data);
        this.postulaciones = data.data;
        console.log('arreglo', this.postulaciones);
      }
    )
}

}
