import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { ChangeDetectorRef } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {

  constructor(
    public carritoService: CarritoService,
    private cd: ChangeDetectorRef,
    private productosService: ProductosService
  ) {}
  ngOnInit() {
    console.log(this.carritoService.carrito());
    this.cd.detectChanges();
  }
  // eliminar producto con id
  eliminar(id: number) {
    this.carritoService.eliminar(id);
    
  }
  // comprar productos del carrito
  comprar(){

  this.productosService
    .comprar(this.carritoService.carrito())
    .subscribe({

      next: () => {

        alert('Compra realizada');

        this.carritoService.carrito.set([]);

      },

      error: (err) => {
        console.log(err);
      }

    });

}

}