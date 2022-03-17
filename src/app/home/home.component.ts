import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  config: any;
  fullpage_api: any;


  options = {
    center: { lat: 41.908347, lng: 0.1883429 },
    zoom: 19,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    scrollwheel: false

  };


  primeros = [
    'Canelones de ternera gratinados',
    'Patatas a la riojana',
    'Ensalada de canónigo, queso Brie, tomate semi-seco y vinagreta de romero',
    "Risotto de setas"
  ];

  segundos = [
    'Chorizo suave a la cerveza',
    'Sepia a la brasa y mayonesa de su tinta',
    'Ternera estofada en cerveza',
    'Pollo al whisky y coles de bruselas'
  ];

  postres = [
    'Tarta al whisky',
    'Semifrío de lima y limón',
    'Cremoso de aguacate y queso Ricotta'
  ];


  constructor() {
    this.config = {
      // fullpage options
      licenseKey: 'C0262168-74E046C2-8000A5AA-ED55E8F1',
      anchors: ['menus', 'bodega', 'contacto'],
      paddingTop: '60px',
      responsiveWidth: 800

    };
  }
  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
  }

}
