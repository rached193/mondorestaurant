import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AvisoLegalComponent } from './sections/aviso-legal/aviso-legal.component';
import { BodegaComponent } from './sections/bodega/bodega.component';
import { MenusComponent } from './sections/menus/menus.component';
import { ReservasComponent } from './sections/reservas/reservas.component';

const routes: Routes = [
  { path: "", component: LandingComponent, data: { animation: 'Landing' } },
  { path: "home", component: HomeComponent, data: { animation: 'Home' } },
  { path: "menus", component: MenusComponent },
  { path: "bodega", component: BodegaComponent },
  { path: "reservas", component: ReservasComponent },
  { path: "aviso-legal", component: AvisoLegalComponent }
];


export const slideInAnimation = trigger('routeAnimations', [
  transition('Landing => Home', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(-100%)' }))
      ], { optional: true }),
    ])
  ]),
  transition('Home => Landing', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(100%)' }))
      ], { optional: true }),
    ])
  ]),
]);

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
