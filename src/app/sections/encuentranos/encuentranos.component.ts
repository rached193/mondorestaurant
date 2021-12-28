import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuentranos',
  templateUrl: './encuentranos.component.html',
  styleUrls: ['./encuentranos.component.scss']
})
export class EncuentranosComponent implements OnInit {

  constructor() { }

  options = {
    center: { lat: 41.908347, lng: 0.1883429 },
    zoom: 19,
    zoomControl: false,
    mapTypeControl: false, 
    streetViewControl: false,
    fullscreenControl: false
  };

  marker = {
    position: { lat: 41.908269168423615, lng: 0.18777238179164946},
 }

  ngOnInit(): void {
  }

}
