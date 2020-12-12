import { Component} from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  role = 'Administrador';
  token = null;

  constructor( private clienteServicio: ClienteService ) {
    this.clienteServicio.token$.subscribe((token) => {
      console.log('token', token)
      this.token = token
    })
  }

  cerrarSesion(){
    this.clienteServicio.cerrarSesion()
  }
}
