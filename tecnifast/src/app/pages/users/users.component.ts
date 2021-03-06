import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROLE, UserInterface } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
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
        this.user.email=result.email;
        this.user.role=result.role;
        this.user.id=result.id;

      }
    );
  }

}
