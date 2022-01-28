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
    'Ensalada templada con queso de cabra',
    'Espinacas a la catalana',
    'Macarrones Rigatte, salsa de tomate, queso Grana Padano y aceite de albahaca',
    'Sancocho y huevo poché'
  ];

  segundos = [
    'Caldereta de rape',
    'Merluza al orio',
    'Entraña marinada y mantequilla de pimentón',
    'Pollo al curry'
  ];

  postres = [
    'Natillas, crumble de galletas Maria caremelizada y helado de vainilla',
    'Arroz con leche, compota de manzada anisada y espuma de queso Parmesano Reggiano',
    'Brownie y helado de vainilla'
  ];



  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      scrollOverflow: true,

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['menus', 'bodega', 'contacto'],
      paddingTop: '60px',
      
    };
  }
  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
  }

}
