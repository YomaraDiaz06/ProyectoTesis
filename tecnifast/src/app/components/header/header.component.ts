import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  usuario!: string;


  constructor(private serviceauth:FirebaseauthService) { }

  ngOnInit(): void {
    try{
      this.serviceauth.getCurrentUser().then(r=>{
        this.usuario!=r?.email;

       console.log(r?.email);

     })
    }catch(error){
      console.log(error);
    }
  }

  //CERRAR SESION
  Onlogout(){

    this.serviceauth.logout();
  }

  //sidebar


  }

