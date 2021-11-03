import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "home", component: HomeComponent, children: [{ path: "menus", component: MenusComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
