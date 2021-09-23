import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//ROLES
export class Role{
  cliente!: String;
  tecnico!: String;
}
// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
  role!: Role;
}


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  headers = new HttpHeaders();
  URL:string="https://tecnifast-6c83t.ondigitalocean.app/api";

  constructor(
    private http: HttpClient,
        ) { 
      this.headers.append("Authorization", "Bearer"+ localStorage.getItem("token"));
    }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(`${this.URL}/register`, user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(`${this.URL}/login`, user);
  }

  // Access user profile
  userAuth(): Observable<any> {
    return this.http.get(`${this.URL}/user`, {headers: this.headers});
  }

  logout(): Observable<any>{
    return this.http.post(`${this.URL}/logout`,{header: this.headers});
  }

}

