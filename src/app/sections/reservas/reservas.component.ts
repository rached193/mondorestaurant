import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  constructor() {


    // if (documentIframe) {

    //   var cookieDesc = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') ||
    //     Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
    //   if (cookieDesc && cookieDesc.configurable) {
    //     Object.defineProperty(documentIframe, 'cookie', {
    //       get: function () {
    //         return cookieDesc && cookieDesc.get && cookieDesc.get.call(document);
    //       },
    //       set: function (val) {
    //         console.log(val);
    //         cookieDesc && cookieDesc.set && cookieDesc.set.call(document, val);
    //       }
    //     });
    //   }
    // }
  }

  ngOnInit(): void {
    document.cookie = 'JSESSIONID=DCD92848CADF02BDD01CF6F444A2FE0B; DOMAIN=portalrest.com';
    console.log(document.cookie)
 
  }

}
