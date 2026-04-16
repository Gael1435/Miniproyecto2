import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// aqui esta el @Input obligatorio del programa
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