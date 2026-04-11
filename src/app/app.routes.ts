import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CatalogoComponent } from './pages/catalogo/catalogo';
import { DetalleComponent } from './pages/detalle/detalle';
import { CarritoComponent } from './pages/carrito/carrito';
import { AgregarComponent } from './pages/agregar/agregar';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'productos/:id', component: DetalleComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'contacto', component: ContactoComponent }
];