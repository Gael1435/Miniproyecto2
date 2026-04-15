import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { ChangeDetectorRef } from '@angular/core';
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
    private cd: ChangeDetectorRef
  ) {
    
  }
  ngOnInit() {
    console.log(this.carritoService.carrito());
    this.cd.detectChanges();
  }
  eliminar(id: number) {
    this.carritoService.eliminar(id);
    
  }

  

}