import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/Libro';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent {

  errorHttp:boolean = false;
  cargando:boolean = false;

  libroId:any = null;
  libros:any = [];

  constructor(private ruta:ActivatedRoute, private http:HttpClient) {

  }

  ngOnInit() {
    this.libroId = this.ruta.snapshot.paramMap.get('libroId');
    this.cargarLista();
  }

  cargarLista(){
    this.http.get('assets/json/lista-de-libros.json').subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false; },
      (respuesta) => { this.errorHttp = true; }
    )
  }  

}
