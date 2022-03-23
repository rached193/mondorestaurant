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
    'Macarrones a la putanesca',
    'Cogollos de romana con puré de anchoas y vinagreta de mostaza',
    'Judías verdes con jamón',
    'Lentejas con chorizo y morcilla',
  ];

  segundos = [
    'Solomillo de cerdo y salsa cumberland',
    'Cachopo, pimientos del padrón y mayonesa de comino',
    'Bacalao al ajoarriero',
    'Trucha, salsa de almendras y patatas a lo pobre'
  ];

  postres = [
    'Sorbete de mar de cava',
    'Tarta Tatin',
    'Arroz con leche, espuma de queso parmesano y esferificación de papaya con naranja'
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
