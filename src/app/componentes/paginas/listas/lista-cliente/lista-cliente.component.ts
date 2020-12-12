import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../servicios/cliente.service'
import { Cliente } from '../../../../interfaces/cliente'

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss'],
  providers: [ ClienteService ]
})
export class ListaClienteComponent implements OnInit {
  clientes: Array<Cliente> = [];

  constructor( private clienteService: ClienteService ) { }

  ngOnInit(): void {
    this.clienteService.list()
    .subscribe( (res) => {
      this.clientes = res
    },
    (error) => {
      console.error('Error al intentar encontrar los clientes', error)
    }
     )
  }

}
