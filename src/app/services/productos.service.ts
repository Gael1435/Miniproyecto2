import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiProductos = 'https://backend-tiendajuegos.onrender.com/productos';
  private apiContacto = 'https://backend-tiendajuegos.onrender.com/contacto';
  private apiComprar = 'https://backend-tiendajuegos.onrender.com/comprar'
  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get(this.apiProductos);
  }

  getProducto(id: number) {
    return this.http.get(`${this.apiProductos}/${id}`);
  }

  agregarProducto(producto: any) {
    return this.http.post(this.apiProductos, producto);
  }

  enviarMensaje(data: any) {
  return this.http.post(this.apiContacto, data);
  }

  comprar(carrito:any){
  return this.http.post(this.apiComprar, carrito);
  } 
}