import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
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
import { ListaUsuarioComponent } from './componentes/paginas/listas/lista-usuario/lista-usuario.component';
import { ListaFacturaComponent } from './componentes/paginas/listas/lista-factura/lista-factura.component';
import { ListaClienteComponent } from './componentes/paginas/listas/lista-cliente/lista-cliente.component';
import { ListaProductoComponent } from './componentes/paginas/listas/lista-producto/lista-producto.component';
import { InisioSesionCuentaComponent } from './componentes/usuario/inisio-sesion-cuenta/inisio-sesion-cuenta.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriasComponent,
    CarritoComponent,
    HistorialComprasComponent,
    ProcesarPagoComponent,
    RegistroComponent,
    InicioSesionComponent,
    ActualizarDatosComponent,
    AdministracionComponent,
    PaginaNoEncontradaComponent,
    ListaUsuarioComponent,
    ListaFacturaComponent,
    ListaClienteComponent,
    ListaProductoComponent,
    InisioSesionCuentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
