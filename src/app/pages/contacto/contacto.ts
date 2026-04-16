import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {

  form = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  enviado = false;
  error = '';

  constructor(
    private productosService: ProductosService,
    private cd: ChangeDetectorRef
  ) {}
  // enviar el formulario a la bd
  enviar() {

    this.enviado = false;
    this.error = '';

    this.productosService
      .enviarMensaje(this.form)
      .subscribe({

        next: () => {

          this.enviado = true;

          this.form = {
            nombre:'',
            correo:'',
            asunto:'',
            mensaje:''
          };
          this.cd.detectChanges();
        },

        error: () => {
          this.error = 'No se pudo enviar mensaje';
        }

      });

  }

}