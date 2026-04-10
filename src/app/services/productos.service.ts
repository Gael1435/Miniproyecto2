import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private api = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get(this.api);
  }

  getProducto(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  agregarProducto(producto: any) {
    return this.http.post(this.api, producto);
  }
}