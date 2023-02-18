import { Component, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent {

  libroAntiguo:HTMLElement|undefined;
  libroAntiguoSpanSeleccionado:HTMLElement|undefined;

  errorHttp:boolean = false;
  cargando:boolean = false;

  libros:any = [];

  constructor(private http:HttpClient, private renderer:Renderer2) {

  }

  ngOnInit() {
    this.cargando = true;
    this.cargarLista();
  }  

  cargarLista(){
    this.http.get('assets/json/lista-de-libros.json').subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false; },
      (respuesta)=> { this.errorHttp = true; }
    )
  }

  verDetalleLibro(libroSeleccionado:HTMLElement, botonComprar:HTMLElement) {
    if(this.libroAntiguo) {
      this.renderer.removeClass(this.libroAntiguo,'destacado');
      this.renderer.removeChild(this.libroAntiguo, this.libroAntiguoSpanSeleccionado);
    }
    this.renderer.addClass(libroSeleccionado,'destacado');
    this.libroAntiguo = libroSeleccionado;

    // Añadimos un elemento span y se lo añadimos al libro seleccinado
    let spanSeleccionado = this.renderer.createElement("span");
    this.renderer.addClass(spanSeleccionado, "seleccionado");
    this.renderer.setProperty(spanSeleccionado, "innerHTML", " ¡Seleccionado!");
    this.renderer.appendChild(libroSeleccionado, spanSeleccionado);
    this.libroAntiguoSpanSeleccionado = spanSeleccionado;
    
    this.renderer.removeAttribute(botonComprar, "disabled");
	  this.renderer.setAttribute(botonComprar, "value", "Ya puedes comprar");
  }

}
