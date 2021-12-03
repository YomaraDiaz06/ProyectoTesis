import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROLE, UserInterface } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  errors=null;
  
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
    public authService: AuthService,
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

  logout(){
    this.authService.logout().subscribe(
      result=>{
        console.log(result);
      },
      error => {
        this.errors = error.error;
      },
      ()=>{
        this.router.navigate(['/']);
      }
    )
  }

}
