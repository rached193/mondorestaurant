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
    'Macarrones, salsa de tomate, queso Parmesano y aceite de albahaca',
    'Lentejas y pato asado',
    'Puré de calabaza, picadillo de jamón y ajotierno'
  ];

  segundos = [
    'Dorada a la brasa, patata panadera y salteado de verduras',
    'Atún, mayonesa de soja y champiñones',
    'Solomillo de cerdo a la brasa y tabulè libanes',
    'Albóndigas de ternera, salsa de tomate, pepino, queso ricota y menta'
  ];

  postres = [
    'Natillas, crumble de galleta Maria y helado de vainilla',
    'Arroz con leche, compota de manzada anisada y espuma de queso',
    'Macedonia de frutas y licor de Cassis'
  ];



  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      slideSelector: '.horizontal-scrolling',
      controlArrows: false,

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['menus', 'bodega', 'contacto'],
      paddingTop: '60px'
    };
  }
  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
  }

}
