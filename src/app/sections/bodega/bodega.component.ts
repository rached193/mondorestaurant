import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.scss']
})
export class BodegaComponent implements OnInit {

  constructor() { }


  vinos = [{
    nombre: "VIÑAS DEL VERO GEWÜRSTRAMINER 2019",
    variedades: "Gewürstraminer",
    grado: 13,
    temperatura: 8,
    precio: 15,
    maridaje: "Carne, Pescado, Carne roja, carne blanca, marisco.",
    imagen: "Gewürstraminer.png"
  }]

  ngOnInit(): void {
  }

}
