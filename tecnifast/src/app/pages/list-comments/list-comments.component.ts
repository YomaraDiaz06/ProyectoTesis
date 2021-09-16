import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROLE, UserInterface } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { GestionuserService } from 'src/app/services/gestionuser.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

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
  comentForm=new FormGroup({
    text: new FormControl('',[Validators.required]),
  })
  constructor(
    private router:Router,
    public authService: AuthService,
    private usuarios: GestionuserService,
  ) { }

  comentarios= new Array();

  ngOnInit(): void {
    this.authService.userAuth().subscribe(
      result=>{
        console.log('user', result);
        this.user.id=result.id;
        this.getComments(result.id);
      }
    );
  }

  doComents(){
    this.usuarios.postComments(this.comentForm.value).subscribe(
      result=>{
        console.log(result);
        this.comentForm.reset();
        
      }
    )
  }

  getComments(id: number){
    this.usuarios.myComents(id).subscribe(
      data=>{
        console.log(data);
        this.comentarios = data.data;
        console.log('arreglo', this.comentarios);
      }
    )
}

}
