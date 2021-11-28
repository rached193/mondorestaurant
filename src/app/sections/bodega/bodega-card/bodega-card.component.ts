import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodega-card',
  templateUrl: './bodega-card.component.html',
  styleUrls: ['./bodega-card.component.scss']
})
export class BodegaCardComponent implements OnInit {

  vino = {
    nombre: "VIÑAS DEL VERO GEWÜRSTRAMINER 2019",
    variedades: "Gewürstraminer",
    grado: 13,
    temperatura: 8,
    precio: 15,
    maridaje: "Carne, Pescado, Carne roja, carne blanca, marisco.",
    imagen: "Gewürstraminer.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
