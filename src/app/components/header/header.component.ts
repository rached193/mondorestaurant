import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() fullpage_api: any

  openMenu = false;

  ngOnInit(): void {
  }

  goTo(fragment: string) {
    console.log("hol")
    this.router.navigate(["/home"], { fragment: fragment })
  }

  toogleMenu() {
    this.openMenu = !this.openMenu;
    console.log(this.openMenu)
  }

}
