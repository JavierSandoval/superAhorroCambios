import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaFacturaComponent } from './lista-factura/lista-factura.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component'

@NgModule({
  declarations: [
    ListaClienteComponent,
    ListaFacturaComponent,
    ListaUsuarioComponent,
    ListaProductoComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports : [
    ListaClienteComponent,
    ListaFacturaComponent,
    ListaUsuarioComponent,
    ListaProductoComponent
  ]
})
export class ListaModule { }
