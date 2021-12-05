import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.scss']
})
export class BodegaComponent implements OnInit {

  constructor() { }

  categoria_seleccionada = "tinto";

  vinos = { 
    blanco:[
      {
        nombre: "VIÑAS DEL VERO GEWÜRSTRAMINER 2019",
        variedades: "Gewürstraminer",
        grado: 13,
        temperatura: 8,
        precio: 15,
        maridaje: "Carne, Pescado, Carne roja, carne blanca, marisco.",
        imagen: "Gewürstraminer.png"
      },
      {
        nombre: "RAMÓN BILBAO VERDEJO 2019",
        variedades: "Verdejo",
        grado: 12.5,
        temperatura: 9,
        precio: 11,
        maridaje: "Entrantes, Aperitivos, Arroz, Carne, Pescado, Cocina Vegetariana",
        imagen: "ramon_verdejo.jpg"
      },
      {
        nombre: "COTO DE GOMÁRIZ 2018",
        variedades: "Albariño, Godello, Treixadura, Loureira",
        grado: 13.9,
        temperatura: 8,
        precio: 21,
        maridaje: "Entrantes, Cocina Japonesa, Pescado y Marisco.",
        imagen: "gomariz.jpg"
      },
      {
        nombre: "K PILOTA 2018",
        variedades: "Hondarrabi Zuri",
        grado: 11,
        temperatura: 9,
        precio: 24,
        maridaje: "Entrantes, Pescados, Mariscos, Comida Japonesa.",
        imagen: "k_pilota.jpg"
      },
      {
        nombre: "PUERTO DE ALICANTE SELECCIÓN 2019",
        variedades: "Chardonnay",
        grado: 12.5,
        temperatura: 9,
        precio: 10,
        maridaje: "Entrantes, queso manchego, jamón, embutidos,  y carne roja, marisco, aves, arroces, caza, setas.",
        imagen: "puerto_alicante.jpg"
      }
  ]};


  ngOnInit(){

  }

  selecionarCategoria(categoria: string) {
    this.categoria_seleccionada = categoria
  }

}
