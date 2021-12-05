import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { BodegaComponent } from './sections/bodega/bodega.component';
import { MenusComponent } from './sections/menus/menus.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "home", component: HomeComponent},
  { path: "menus", component: MenusComponent }, 
  { path: "bodega", component: BodegaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
