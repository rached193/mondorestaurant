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
    'Ensalada templada de gulas y setas',
    'Crema de guisantes al poleo con espuma de queso',
    'Espaguetis y gambas al ajillo',
    'Calabacines rellenos de mejillones, jamón serrano y caviar de trucha'
  ];

  segundos = [
    'Atún en salsa de piquillo',
    'Merluza braseada al vino blanco con finas hierbas',
    'Solomillo de cerdo en salsa de champiñón y reducción de Vozka',
    'Magret de pato con chutney de piña y reducción de Moscatell.'
  ];

  postres = [
    'Contraste de chocolates',
    'Yogur de oveja con frutos del bosque',
    'Crema catalana y merengue'
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
