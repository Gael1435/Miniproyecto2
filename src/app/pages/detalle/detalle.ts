import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.html',
   styleUrls: ['./detalle.css']
})
export class DetalleComponent implements OnInit {

  producto: any = {};

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.productosService.getProducto(id).subscribe((data: any) => {
    this.producto = data;

    this.cd.detectChanges();
  });
}
}

