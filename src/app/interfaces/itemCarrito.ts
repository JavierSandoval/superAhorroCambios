import  { Producto } from '../interfaces/producto'

export interface ItemCarrito {
    producto: Producto,
    cantidad: number,
    subtotal: number
}
