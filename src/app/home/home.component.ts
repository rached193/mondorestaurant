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
    'Ensalada César',
    'Papardelle al pesto',
    'Garbanzos en salsa de almendras',
    'Menestra de verduras',
  ];

  segundos = [
    'Albóndigas al vino tinto',
    'Filete de pescado y salsa de coco',
    'Chuleta de cerdo y puré de patata trufado',
    'Espetos con piquillo y patata panadera'
  ];

  postres = [
    'Fresas con nata',
    'Yogur de oveja y mermelada',
    'Natilla de chocolate y crumble de galleta con almendra'
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
