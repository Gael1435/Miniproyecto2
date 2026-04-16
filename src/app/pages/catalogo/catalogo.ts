import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { CarritoService} from '../../services/carrito.service';
import { ChangeDetectorRef } from '@angular/core';

import { TarjetaProductoComponent } from '../../components/tarjeta-producto/tarjeta-producto';
@Component({
  selector: 'app-catalogo',
  standalone: true, 
  imports: [CommonModule, TarjetaProductoComponent], 
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})


export class CatalogoComponent implements OnInit {

  productos: any[] = [];

  constructor(
    private productosService: ProductosService,
    private router: Router,
    public carritoService: CarritoService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {

  this.productosService.getProductos().subscribe((data: any) => {

      this.productos = data.map((p: any) => ({

        id: Number(p.id),

        nombre: p.nombre,

        categoria: p.categoria,

        marca: p.marca,

        precio: Number(p.precio),

        stock: Number(p.stock),

        imagen: p.imagen,

        descripcion: p.descripcion,

        disponible: Boolean(p.disponible)

      }));

      console.log(this.productos);

      this.cd.detectChanges();

    });

}

// ver el detalle de un producto
  verDetalle(id: number) {
    this.router.navigate(['/productos', id]);
  }
// agregar un producto al carrito
  agregarCarrito(producto: any) {
  this.carritoService.agregar(producto);
  }
  
}