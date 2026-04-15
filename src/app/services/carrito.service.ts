import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito = signal<any[]>([]);

  agregar(producto: any) {

    const items = this.carrito();

    const existe = items.find(p => p.id === producto.id);

    if (existe) {
      existe.cantidad++;
      this.carrito.set([...items]);
    } else {
      this.carrito.set([
        ...items,
        { ...producto, cantidad: 1 }
      ]);
    }

    console.log("carrito actual:", this.carrito());
  }

  eliminar(id: number) {
    this.carrito.set(
      this.carrito().filter(p => p.id !== id)
    );
  }

  total() {
    return this.carrito().reduce(
      (sum, p) => sum + p.precio * p.cantidad,
      0
    );
  }
}