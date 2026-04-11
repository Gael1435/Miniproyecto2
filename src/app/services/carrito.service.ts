import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito = signal<any[]>(this.cargarCarrito());

  agregar(producto: any) {
    const nuevo = [...this.carrito(), producto];
    this.carrito.set(nuevo);
    localStorage.setItem('carrito', JSON.stringify(nuevo));
  }

  eliminar(index: number) {
    const nuevo = this.carrito().filter((_, i) => i !== index);
    this.carrito.set(nuevo);
    localStorage.setItem('carrito', JSON.stringify(nuevo));
  }

  total() {
    return this.carrito().reduce((sum, p) => sum + p.precio, 0);
  }

  private cargarCarrito(): any[] {
    const data = localStorage.getItem('carrito');
    return data ? JSON.parse(data) : [];
  }

}