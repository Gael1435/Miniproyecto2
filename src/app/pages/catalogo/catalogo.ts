import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { CarritoService} from '../../services/carrito.service';
@Component({
  selector: 'app-catalogo',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './catalogo.html'
})
export class CatalogoComponent implements OnInit {

  productos: any[] = [];

  constructor(
    private productosService: ProductosService,
    private router: Router,
    public carritoService: CarritoService
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
  alert('CLICK FUNCIONA');
  console.log('Agregado:', producto);
  this.carritoService.agregar(producto);
}
  

  prueba() {
  console.log('SI FUNCIONA CLICK');
}
}