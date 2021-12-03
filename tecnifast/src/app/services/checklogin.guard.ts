import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable} from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
    providedIn: 'root'
})

export class CheckloginGuard implements CanActivate{
    
    constructor(
        private isLogin:TokenService,
        public router: Router
        ){
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.isLogin.isValidToken()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }
    
}
