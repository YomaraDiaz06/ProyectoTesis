import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signup(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }

  login(data: (m: any) => void) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data: any) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  changePassword(data: any) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

}
