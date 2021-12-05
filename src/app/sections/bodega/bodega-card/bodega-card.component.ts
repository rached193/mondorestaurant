import { Component, Input, OnInit } from '@angular/core';
import { Vino } from '../vino.model';


@Component({
  selector: 'app-bodega-card',
  templateUrl: './bodega-card.component.html',
  styleUrls: ['./bodega-card.component.scss']
})
export class BodegaCardComponent implements OnInit {

  @Input() datosVino!: Vino;
  
  constructor() { }

  ngOnInit(): void {
  }

}
