import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROLE, UserInterface } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { GestionuserService } from 'src/app/services/gestionuser.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
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

  constructor(
    private router:Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.userAuth().subscribe(
      result=>{
        console.log('user', result);
        this.user.name=result.name;
        this.user.role=result.role;
      }
    );
  }

}
