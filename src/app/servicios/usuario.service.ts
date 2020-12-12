import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlUsuario : String;

  constructor(private http: HttpClient) {
    this.urlUsuario = `${environment.API_URL}/api/usuarios/`
   }

   list () : Observable <any> {
    return this.http.get(this.urlUsuario+'list');
   }

   create (usuario) {
    let params = JSON.stringify(usuario);//convertir el objeto a uno objeto JSON
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.urlUsuario+'create',params,{headers: headers});
   }

   delete (id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.urlUsuario+`delete/${id}`,{headers: headers});
   }

   update (id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.urlUsuario+`update/${id}`,{headers: headers});
   }

   findId (id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.urlUsuario+`find/${id}`,{headers: headers});
   }
  
   autenticacion (usuario, contrasena ) {
    let llave = {usuario: usuario, contrasena: contrasena }
    let params = JSON.stringify(llave);//convertir el objeto a uno objeto JSON
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.urlUsuario+'autenticacion',params,{headers: headers});
   }

}
