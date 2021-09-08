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

// Solicitud interface
export class Solicitud {
  descripcionPCQ!:String;
  fechaIni!:Date;
  fechaFin!:Date;
  dano!:String;
  descripcion!:String;
}

// Solicitud interface
export class Postulacion {
  estado!:String;
  solicitud_id!:Number;
}

@Injectable({
  providedIn: 'root'
})

export class GestionuserService {

  headers = new HttpHeaders();
  URL:string="http://127.0.0.1:8000/api";

  constructor( private http: HttpClient,
    ) { 
  this.headers.append("Authorization", "Bearer"+ localStorage.getItem("token"));
}

registerTecnico(user: User): Observable<any> {
  return this.http.post(`${this.URL}/register`, user,{headers: this.headers});
}

getAllComents():Observable<any>{
  return this.http.get(`${this.URL}/comments`,{headers: this.headers});
}

solicitarServicio(solicitud: Solicitud):Observable<any>{
  return this.http.post(`${this.URL}/solicitudes`, solicitud,{headers: this.headers})
}

soliSinAsignar():Observable<any>{
  return this.http.get(`${this.URL}/solicitudes`, {headers: this.headers})
}

postularSolicitud():Observable<any>{
  return this.http.post(`${this.URL}/postulaciones`, {headers: this.headers})
}


}
