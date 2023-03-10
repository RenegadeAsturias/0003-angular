import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'lista-de-libros' },
	{ path:'lista-de-libros', component:ListaDeLibrosComponent }, 
  { path:'detalle/:libroId', component:DetalleLibroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
