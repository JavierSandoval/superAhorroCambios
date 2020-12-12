import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  productosCarrito: Producto [] = []

  constructor() { }

  ngOnInit(): void {
  }

}
