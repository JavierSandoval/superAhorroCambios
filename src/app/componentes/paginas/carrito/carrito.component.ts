import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { ItemCarrito } from '../../../interfaces/itemCarrito'
import { Observable } from 'rxjs';
import { CarritoService } from '../../../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  productosCarrito: ItemCarrito [] = []
  precioTotal: number = 0;

  constructor(private _carritoService: CarritoService) { }

  ngOnInit(): void {

    this._carritoService.datosActualesCarrito$.subscribe(values => {
      if(values){
        this.productosCarrito = values;
        if(this.productosCarrito.length > 0){
          for (let i = 0; i < this.productosCarrito.length; i++) {
            this.productosCarrito[i].subtotal = (this.productosCarrito[i].producto.precio * this.productosCarrito[i].cantidad);
          }
        }
        this.actualizarTotal();
      }
    })
  }

  actualizarTotal(){
    if(this.productosCarrito.length > 0){
      let precioAuxiliar: number = 0
      for (let i = 0; i < this.productosCarrito.length; i++) {
        precioAuxiliar += this.productosCarrito[i].subtotal;
      }
      this.precioTotal = precioAuxiliar;
    }
  }

  removerItem(producto: Producto) {
    this._carritoService.removerItem(producto);
  }

}
