import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemCarrito } from '../interfaces/itemCarrito';
import { Producto } from '../interfaces/producto'

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: BehaviorSubject<ItemCarrito []> = new BehaviorSubject([]);
  public datosActualesCarrito$ = this.carrito.asObservable();

  constructor() { }

  cambioEnCarrito(nuevoProducto: Producto){
    let listaCarrito = this.carrito.getValue();

    if(listaCarrito){
      let prodIndex = listaCarrito.findIndex((obj => obj.producto._id === nuevoProducto._id));

      if(prodIndex != -1){
        listaCarrito[prodIndex].cantidad += 1;
      }else{
        listaCarrito.push({
          producto: nuevoProducto,
          cantidad: 1,
          subtotal: 0
        });
      }
    }else{
      listaCarrito.push({
        producto: nuevoProducto,
        cantidad: 1,
        subtotal: 0
      });
    }

    this.carrito.next(listaCarrito);
  }

  removerItem(nuevoProducto: Producto){
    let listaCarrito = this.carrito.getValue();

    let prodIndex = listaCarrito.findIndex((obj => obj.producto._id === nuevoProducto._id));

    if(prodIndex != -1){
      listaCarrito[prodIndex].cantidad = 1;
      listaCarrito.splice(prodIndex,1);
    }
    this.carrito.next(listaCarrito);

  }


}
