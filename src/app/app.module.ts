import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './sections/menus/menus.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { BodegaComponent } from './sections/bodega/bodega.component';
import { BodegaCardComponent } from './sections/bodega/bodega-card/bodega-card.component';
import { HeaderComponent } from './components/header/header.component';
import { ReservasComponent } from './sections/reservas/reservas.component';
import { AvisoLegalComponent } from './sections/aviso-legal/aviso-legal.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    MenusComponent,
    BodegaComponent,
    BodegaCardComponent,
    HeaderComponent,
    ReservasComponent,
    AvisoLegalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
