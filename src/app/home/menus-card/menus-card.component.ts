import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus-card',
  templateUrl: './menus-card.component.html',
  styleUrls: ['./menus-card.component.scss']
})
export class MenusCardComponent implements OnInit {


  @Input() label: string = '';
  @Input() info: string[] = [];



  constructor() { }

  ngOnInit(): void {
  }



}
