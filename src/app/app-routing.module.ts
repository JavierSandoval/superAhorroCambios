import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { CategoriasComponent } from './componentes/paginas/categorias/categorias.component';
import { CarritoComponent } from './componentes/paginas/carrito/carrito.component';
import { HistorialComprasComponent } from './componentes/paginas/historial-compras/historial-compras.component';
import { ProcesarPagoComponent } from './componentes/paginas/procesar-pago/procesar-pago.component';
import { RegistroComponent } from './componentes/usuario/registro/registro.component';
import { InicioSesionComponent } from './componentes/usuario/inicio-sesion/inicio-sesion.component';
import { ActualizarDatosComponent } from './componentes/usuario/actualizar-datos/actualizar-datos.component';
import { AdministracionComponent } from './componentes/paginas/administracion/administracion.component';
import { PaginaNoEncontradaComponent } from './componentes/paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { InisioSesionCuentaComponent } from './componentes/usuario/inisio-sesion-cuenta/inisio-sesion-cuenta.component';

const routes: Routes = [
  {
    path: '',// http://localhost:4200
    //componenetes que va abrir
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',// http://localhost:4200/inicio
    //componenetes que va abrir
    component:InicioComponent
  },
  {
    path: 'iniciarSesion',// http://localhost:4200/inicio
    //componenetes que va abrir
    component:InicioSesionComponent
  },
  {
    path: 'carrito',// http://localhost:4200/inicio
    //componenetes que va abrir
    component:CarritoComponent
  },
  {
    path: 'actualizarDatos',// http://localhost:4200/inicio
    //componenetes que va abrir
    component:ActualizarDatosComponent
  },
  {
    path: 'historial',// http://localhost:4200/historial
    //componenetes que va abrir
    component:HistorialComprasComponent
  },
  {
    path: 'procesarCompra',// http://localhost:4200/procesarCompra
    //componenetes que va abrir
    component:ProcesarPagoComponent
  },
  {
    path: 'registro',// http://localhost:4200/registro
    //componenetes que va abrir
    component:RegistroComponent
  },
  {
    path: 'categorias/:categoria',// http://localhost:4200/registro
    //componenetes que va abrir
    component:CategoriasComponent
  },
  {
    path: 'administracion',// http://localhost:4200/administracion
    //componenetes que va abrir
    component:AdministracionComponent
  },
  {
    path: 'cuenta',// http://localhost:4200/cuenta
    //componenetes que va abrir
    component:InisioSesionCuentaComponent
  },
  {
    path: '**',
    component: PaginaNoEncontradaComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
