import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true, // 👈 IMPORTANTE
  imports: [CommonModule], // 👈 ESTO ARREGLA ngFor y currency
  templateUrl: './catalogo.html'
})
export class CatalogoComponent implements OnInit {

  productos: any[] = [];

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productosService.getProductos().subscribe((data: any) => {
      this.productos = data;
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/productos', id]);
  }

  agregarCarrito(producto: any) {
    console.log('Producto agregado:', producto);
  }
}