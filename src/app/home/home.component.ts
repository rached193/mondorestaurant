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
    'Ensalada de escarola con frutos rojos y gel de apio',
    'Sopa castellana',
    'Remolacha frita, alcaparras y alioli de azafrán',
    'Borraja con almejas'
  ];

  segundos = [
    'Trucha a la navarra',
    'Bacalao con muselina de ajo y patata panadera',
    'Chorizo a la cerveza',
    'Secreto con verduritas y rulo de cabra'
  ];

  postres = [
    'Empanadillas de membrillo y queso Ricotta',
    'Crêpes de crema de avellanas y plátano',
    'Mousse de papaya y naranja'
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
