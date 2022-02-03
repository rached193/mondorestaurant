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
    'Tagliatelle a la carbonata',
    'Trinxat y crujiente de panceta',
    'Sopa de cebolla',
    'Ensalada César'
  ];

  segundos = [
    'Entraña marinada y chimichurri',
    'Bitoques en salsa de almendras',
    'Bacalao en Sanfaina',
    'Marmitaco'
  ];

  postres = [
    'Coulant de chocolate y helado de romero',
    'Natillas, crumble de galleta María Caramelizada y helado de vainilla',
    'Arroz con leche, compota de manzana anisada y espuma de queso parmesano'
  ];


  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['menus', 'bodega', 'contacto'],
      paddingTop: '60px',
      responsive:300
      
    };
  }
  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
  }

}
