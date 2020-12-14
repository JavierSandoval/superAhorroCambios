import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ProductoService } from '../../../servicios/producto.service'
import { Producto } from '../../../interfaces/producto'
import { CarritoService } from '../../../servicios/carrito.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  providers: [ProductoService]
})
export class CategoriasComponent implements OnInit {
  //rutaActiva: any
  categoria: any;
  listaCategoria: Producto [] = []
  productoZoom: Producto = {
    _id: '',
    nombre: '',
    marca: '', 
    precio: 0,
    categoria: '',
    cantInventario: 0,
    urlImg: ''
  }

  constructor(
    private rutaActiva: ActivatedRoute,
    private _productoService: ProductoService,
    private _carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) =>{
      this.categoria = params.categoria;
      console.log(this.categoria)
      this._productoService.list().subscribe(
        response => {
          let listaAuxiliar: Producto[] = [];
          for (let i = 0; i < response.length; i++) {
            if(response[i].categoria === this.categoria){
              listaAuxiliar.push(response[i])
            }
          }
          this.listaCategoria = listaAuxiliar
          console.log(this.listaCategoria)
        },
        error => {
          console.log(error)
        }
      )
    })
  }

  onClickZoom(productoSeleccionado: Producto){
    this.productoZoom = productoSeleccionado
  }

  agregarCarrito(producto: Producto){
    this._carritoService.cambioEnCarrito(producto);
  }

}
