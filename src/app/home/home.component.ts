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
    'Ensalada de tomate cherry y maiz',
    'Spaguetti a la carbonata',
    'Lentejas con pato asado',
  ];

  segundos = [
    'Salmón y mantequilla de eneldo',
    'Pechuga de pollo con queso y salsa de piquillo',
    'Ternera estofada',
  ];

  postres = [
    'Leche frita',
    'Tarta al Whisky',
    'Manzana al horno "estilo tradicional"'
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
