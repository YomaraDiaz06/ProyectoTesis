import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean = false;
  @Output()
  toggleSidebar = new EventEmitter<void>();
  isSignedIn: boolean = false;

  public showSearch = false;
  usuario: string='';

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService
    ) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  

}
