import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus-card',
  templateUrl: './menus-card.component.html',
  styleUrls: ['./menus-card.component.scss']
})
export class MenusCardComponent implements OnInit {


  innerWidth = 0 

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
  }



  @Input() label: string = '';
  @Input() info: string[] = [];



  constructor() { }

  ngOnInit(): void {
  }



}
