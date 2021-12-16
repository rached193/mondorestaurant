import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.scss']
})
export class BodegaComponent implements OnInit {

  constructor() { }

  categoria_seleccionada: "tinto" | "blanco" | "rosado" = "tinto";

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
      },
      {
        nombre: "Z DE ZALEO BLANCO 2016",
        variedades: "Moscatel",
        grado: 11,
        temperatura: 8,
        precio: 10,
        maridaje: " Entrantes, Ensaladas, Postres, Queso Azul, Comida Mexicana, Comida Asiática y Mariscos.",
        imagen: "zaleo.png"
      }
  ],
  tinto:[
    {
      nombre: "PROTOS CRIANZA 2016",
      variedades: "Tempranillo, Tinta Fina, Tinta del País.",
      grado: 14.5,
      temperatura: 16,
      precio: 26,
      maridaje: "Entrantes, jamón y embutidos, arroz, pasta, aves y carne roja.",
      imagen: "protos_crianza.png"
    },
    {
      nombre: "BORSAO 3 PICOS",
      variedades: "Garnacha",
      grado: 15,
      temperatura: 17,
      precio: 23,
      maridaje: "Entrantes, Jamón y embutidos, carnes, Cerdo.",
      imagen: "borsao.png"
    },
    {
      nombre: "MARQUÉS DE RISCAL RESERVA 2016",
      variedades: "Mazuelo, Graciano, Tempranillo",
      grado: 14,
      temperatura: 16,
      precio: 24,
      maridaje: "Entrantes, Jamón y embutidos, carnes, Cerdo.",
      imagen: "marques_riscal.png"
    },
    {
      nombre: "FLOR DE VETUS 2017",
      variedades: "Tinta de Toro",
      grado: 14.5,
      temperatura: 16,
      precio: 12,
      maridaje: "Entrantes, queso manchego, jamón y embutidos y carne roja.",
      imagen: "flor_vetus.png"
    },
    {
      nombre: "LAYA 2019",
      variedades: "Garnacha, Monastrell",
      grado: 14,
      temperatura: 13,
      precio: 8,
      maridaje: "Entrantes, Jamón y embutidos, carnes, Cerdo",
      imagen: "laya.png"
    },
    {
      nombre: "JUAN GIL ETIQUETA PLATA 2018",
      variedades: "Monastrell",
      grado: 15,
      temperatura: 16,
      precio: 20,
      maridaje: "Entremeses, queso manchego, jamón, embutidos,  y carne roja, marisco, aves, arroces, caza, setas",
      imagen: "juan_gil.png"
    },
  ],
  rosado:[
    {
      nombre: "ALQUÉZAR ROSADO 2019",
      variedades: "Tempranillo, Cabernet Sauvignon.",
      grado: 13,
      temperatura: 8,
      precio: 26,
      maridaje: "Entrantes, jamón y embutidos, arroz, pasta, aves y carne roja.",
      imagen: "protos_crianza.png"
    },
    {
      nombre: "CHIVITE LAS FINCAS 2019",
      variedades: "Tempranillo, Garnacha negra",
      grado: 13.5,
      temperatura: 8,
      precio: 16,
      maridaje: "Arroces, carne roja, pescado, carnes blancas y pasta",
      imagen: "chivite.jpg"
    },
    {
      nombre: "TAPAFUGAS 2018",
      variedades: "Albillo, Garnacha",
      grado: 13,
      temperatura: 11,
      precio: 19,
      maridaje: "Entrantes, Cocina Japonesa, Pescado y Marisco",
      imagen: "tapafugas.png"
    },
    {
      nombre: "CASTILLO DE PERELADA ROSADO 2013",
      variedades: "Cariñena, Garnacha, Ull de Llebre",
      grado: 11.5,
      temperatura: 9,
      precio: 16,
      maridaje: "Entrantes, Pescados, Mariscos, Comida Japonesa",
      imagen: "castillo_peralada.png"
    },
    {
      nombre: "EL GRIFO ROSADO DE LAGRIMA 2019",
      variedades: "Listan negroe",
      grado: 12,
      temperatura: 11,
      precio: 25,
      maridaje: "Arroz, Pasta",
      imagen: "grifo.png"
    },
    {
      nombre: "PRADOREY ROSADO FERMENTADO EN BARRICA 2019",
      variedades: "Merlot, Tempranillo",
      grado: 14.5,
      temperatura: 11,
      precio: 15,
      maridaje: "Pescado, Pescado azul y arroz.",
      imagen: "prado_rey.png"
    },
  ]
};


  ngOnInit(){

  }

  selecionarCategoria(categoria: "tinto" | "blanco" | "rosado") {
    this.categoria_seleccionada = categoria
  }

}
