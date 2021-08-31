import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  URL:string="http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(`${this.URL}/register`, user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(`${this.URL}/login`, user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }

}

