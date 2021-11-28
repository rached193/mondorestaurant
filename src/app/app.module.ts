import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './sections/menus/menus.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { BodegaComponent } from './sections/bodega/bodega.component';
import { BodegaCardComponent } from './sections/bodega/bodega-card/bodega-card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    MenusComponent,
    BodegaComponent,
    BodegaCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
