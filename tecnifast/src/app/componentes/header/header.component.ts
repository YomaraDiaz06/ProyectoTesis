import { Component, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ROLE, UserInterface } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
  isLogin = new Boolean;
  errors=null;

  constructor(
    private router:Router,
    public authService: AuthService,
    private token: TokenService,
  ) { }

  ngOnInit(): void {
    this.authService.userAuth().subscribe(
      result=>{
        console.log('user', result);
        this.user.name=result.name;
        this.isLogin = true;
        console.log(this.isLogin);
        
      },
      error => {
        this.errors = error.error;
        this.isLogin=false;
        console.log(this.isLogin);
      },     

    );
    }

    logout(){
      this.token.removeToken();
      console.log('desconectado')
    }
}


