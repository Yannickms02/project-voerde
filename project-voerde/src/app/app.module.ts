import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common'; // Importiere den DatePipe

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung/datenschutzerklaerung.component';
import { GlaubeComponent } from './glaube/glaube.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { PartnerComponent } from './partner/partner.component';
import { KirchenleitungComponent } from './kirchenleitung/kirchenleitung.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    KontaktComponent,
    ImpressumComponent,
    DatenschutzerklaerungComponent,
    GlaubeComponent,
    AktuellesComponent,
    PartnerComponent,
    KirchenleitungComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [DatePipe], // Füge den DatePipe zur providers-Liste hinzu
  bootstrap: [AppComponent]
})
export class AppModule { }
