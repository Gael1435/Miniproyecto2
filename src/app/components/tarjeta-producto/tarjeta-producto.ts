import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-producto.html',
  styleUrls: ['./tarjeta-producto.css']
})
export class TarjetaProductoComponent {

  @Input() producto: any;

}