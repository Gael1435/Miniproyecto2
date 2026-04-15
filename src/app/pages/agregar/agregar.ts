import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar.html',
  styleUrls: ['./agregar.css']
})
export class AgregarComponent {

  enviado = false;
  error = '';
  formulario = new FormGroup({

    nombre: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),

    precio: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),

    stock: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),

    imagen: new FormControl('', Validators.required),

    descripcion: new FormControl('', Validators.required),

    disponible: new FormControl(true)

  });

  constructor(
    private productosService: ProductosService
  ) {}

  guardar() {

  this.error = '';
  this.enviado = false;

  if (this.formulario.invalid) {

    this.error = 'Completa todos los campos correctamente';
    return;

  }

  this.productosService
    .agregarProducto(this.formulario.value)
    .subscribe({

      next: () => {

        this.enviado = true;

        this.formulario.reset({
          disponible: true
        });

      },

      error: () => {
        this.error = 'Error al guardar producto';
      }

    });

}

}