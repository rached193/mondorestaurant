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
    'Guisantes con papada de cerdo',
    'Garbanzos y sepia encebollada',
    'Ensalada de hinojo',
    'Ravioli de merluza y rape con salsa americana'
  ];

  segundos = [
    'Lubina y rabanitos',
    'Sepia a la brasa con alioli de tinta',
    'Costilla de cerdo asada y salsa barbacoa',
    'Pollo al curry'
  ];

  postres = [
    'Isla Flotante',
    'Macedonia de frutas y licor de Cassis',
    'Arroz con leche'
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
