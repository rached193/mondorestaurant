import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  marker = {
    position: { lat: 41.908269168423615, lng: 0.18777238179164946 },
  };

  primeros = [
    'Ensalada Nizarda',
    'Macarrones, salsa de tomate y queso Grana Padano',
    'Lentejas y pato asado',
    'Puré de calabaza, picadillo de jamón'
  ];

  segundos = [
    'Dorada con patata panadera y salteado de verduras',
    'Atún con mayonesa de soja y champiñones',
    'Solomillo de cerdo con salsa café de parís',
    'Albóndigas de ternera salsa de tomate, pepino, queso ricota y menta'
  ];

  postres = [
    'Natillas con crumble de galleta Maria y helado de vainilla',
    'Tarta de  queso con coulis de frutos rojos, virutas de queso curado',
    'Yogur Val de Cinca con miel y nueces'
  ];
  


  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['menus', 'bodega', 'equipo', 'contacto'],
      paddingTop: '60px'
    };
  }
  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
  }

}
