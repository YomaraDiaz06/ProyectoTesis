import { Component, OnInit } from '@angular/core';
import { ROLE, UserInterface } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { GestionuserService } from 'src/app/services/gestionuser.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-list-solicitdues',
  templateUrl: './list-solicitdues.component.html',
  styleUrls: ['./list-solicitdues.component.css']
})
export class ListSolicitduesComponent implements OnInit {

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

  solicitudes= new Array();
  postulaciones= new Array();
  closeResult='';
  
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
        this.solicitudUser(result.id);
      }
    );

    

  }

  solicitudUser(id: number){
      this.usuarios.mySolicitudes(id).subscribe(
        data=>{
          console.log(data);
          this.solicitudes = data.data;
          console.log('arreglo', this.solicitudes);
        }
      )
  }

  postulacionSoli(id: number){
    this.usuarios.elegirPostulacion(id).subscribe(
      data=>{
        console.log(data);
        this.postulaciones = data.data;
        console.log('postulaciones', this.postulaciones);      
        
      }
    )
  }

  open(content: any) {
    this.ngModal.open(content,{size: 'md'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}


