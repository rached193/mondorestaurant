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
    'Canelones de carne',
    'Alcachofas con Jamón',
    'Alubias con papada y chorizo',
    'Crema de calabacín'
  ];

  segundos = [
    'Carrillera de ternera al vino tinto y cremoso de manzana',
    'Solomillo al Roquefort',
    'Calamar a la brasa con judía picante',
    'Bacalao a la riojana'
  ];

  postres = [
    'Milhojas de crema pastelera y frutas',
    'Peras al vino',
    'Crepes rellenos de crema de avellanas'
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
