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
  dano!:String;
  descripcion!:String;
  estado!:String;
}

// Solicitud interface
export class Postulacion {
  estado!:String;
  solicitud_id!:Number;
}

// Solicitud interface
export class Tecnico {
  name!: String;
  email!: String;
  telefono!: String;
  descripcion!: String;
  estudios!: String;

}

@Injectable({
  providedIn: 'root'
})

export class GestionuserService {

  headers = new HttpHeaders();
  URL:string="https://tecnifast-6c83t.ondigitalocean.app/api";

  constructor( private http: HttpClient,
    ) { 
  this.headers.append("Authorization", "Bearer"+ localStorage.getItem("token"));
}

registerTecnico(user: User): Observable<any> {
  return this.http.post(`${this.URL}/register`, user,{headers: this.headers});
}
// comentarios
postComments(text: string):Observable<any>{
  return this.http.post(`${this.URL}/comments`,text,{headers: this.headers})
}

getAllComents():Observable<any>{
  return this.http.get(`${this.URL}/comments`,{headers: this.headers});
}

myComents(id: Number):Observable<any>{
  return this.http.get(`${this.URL}/users/comments/`+id,{headers: this.headers});
}
//Requerimientos cliente
solicitarServicio(solicitud: Solicitud):Observable<any>{
  return this.http.post(`${this.URL}/solicitudes`, solicitud,{headers: this.headers})
}

mySolicitudes(id: Number): Observable<any>{
  return this.http.get(`${this.URL}/users/solicitudes/`+id,{headers: this.headers})
}
//Tecnico
postularSolicitud(id:Number):Observable<any>{

  var postualacion =new Postulacion();
  postualacion.estado='Espera';
  postualacion.solicitud_id=id;

  return this.http.post(`${this.URL}/postulaciones`,  postualacion, {headers: this.headers})
}

soliSinAsignar():Observable<any>{
  return this.http.get(`${this.URL}/solicitud-sin-asignar`, {headers: this.headers})
}

myPostulacion(id: Number): Observable<any>{
  return this.http.get(`${this.URL}/users/postulaciones/`+id,{headers: this.headers})
}

elegirPostulacion(id: Number):Observable<any>{
  return this.http.get(`${this.URL}/solicitudes/postulaciones/`+id,{headers: this.headers})
}

postulacionAsig(id: Number):Observable<any>{
  return this.http.get(`${this.URL}/solicitudes/postulaciones/asignada/`+id,{headers: this.headers})
}

trabajaNosotors(tecnico: Tecnico): Observable<any>{
  return this.http.post(`${this.URL}/infotecnicos`, tecnico);
}

}
