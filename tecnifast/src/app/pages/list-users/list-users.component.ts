import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GestionuserService } from 'src/app/services/gestionuser.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users= new Array();
  constructor(
    private usuarios: GestionuserService,
    private authService: AuthService,
  ) { }


  ngOnInit(): void {
    this.listTecnicos();

  }

  listTecnicos(){
    this.usuarios.listTecnico().subscribe(
      data=>{
        console.log(data);
        this.users = data.data;
        console.log('arreglo', this.users);
      })
  }

  listClientes(){
    this.usuarios.listCliente().subscribe(
      data=>{
        console.log(data);
        this.users = data.data;
        console.log('arreglo', this.users);
      })
  }

}
