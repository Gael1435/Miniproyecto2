import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiProductos = 'http://localhost:3000/productos';
  private apiContacto = 'http://localhost:3000/contacto';
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
}