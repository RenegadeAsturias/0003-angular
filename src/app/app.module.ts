import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeLibrosComponent,
    DetalleLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
