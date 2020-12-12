import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente'
import { environment } from '../../environments/environment'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlCliente : String;

  private autenticacionToken = new BehaviorSubject<{}>({});//parte reactivo   1
  token$ = this.autenticacionToken.asObservable();//pate observable, ventana que se puede mirar si hay cambios     2

  constructor(private http: HttpClient) {
    const jwtToken = localStorage.getItem('SuperAhorroClient');
    if (jwtToken) { 
      this.autenticacionToken.next(jwtToken);
    }

    this.urlCliente = `${environment.API_URL}/api/clientes/`
   }

   list () {
    return this.http.get<Array<Cliente>>(this.urlCliente+'list');
   }

   create (cliente) {
    let params = JSON.stringify(cliente);//convertir el objeto a uno objeto JSON
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.urlCliente+'create',params,{headers: headers});
   }

   delete (id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.urlCliente+`delete/${id}`,{headers: headers});
   }

   update (id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.urlCliente+`update/${id}`,{headers: headers});
   }

   findId (id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.urlCliente+`find/${id}`,{headers: headers});
   }
   
  
   autenticacion (credenciales = {} ) {

    return this.http.post(this.urlCliente+'autenticacion',credenciales)
   }

   cerrarSesion() {
     localStorage.removeItem('SuperAhorroClient');
     this.autenticacionToken.next(null);
   }

   guardarToken(jwtToken) {
    localStorage.setItem('SuperAhorroClient', jwtToken);
    this.autenticacionToken.next(jwtToken);
  }

}
/**
 * autenticacion (usuario, contrasena ) {
    let llave = {usuario: usuario, contrasena: contrasena }
    let params = JSON.stringify(llave);//convertir el objeto a uno objeto JSON
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.urlCliente+'autenticacion',params,{headers: headers})
 */
