import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
  standalone: true,
})

export class DetalleComponent {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productosService.getProducto(id).subscribe((data: any) => {
      this.producto = data;
    });
    this.producto = {
    nombre: 'Control Xbox',
    marca: 'Microsoft',
    precio: 1200,
    descripcion: 'Control inalámbrico',
    imagen: 'https://via.placeholder.com/150'
  };
  }
}
