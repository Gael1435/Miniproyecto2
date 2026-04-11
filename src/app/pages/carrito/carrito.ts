import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html'
})
export class CarritoComponent {

  constructor(public carritoService: CarritoService) {}

  eliminar(index: number) {
    this.carritoService.eliminar(index);
  }
}