import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung/datenschutzerklaerung.component';
import { KirchenleitungComponent } from './kirchenleitung/kirchenleitung.component';
import { PartnerComponent } from './partner/partner.component';
import { GlaubeComponent } from './glaube/glaube.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';

const routes: Routes = [
  {path: 'impressum', component: ImpressumComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'datenschutz', component: DatenschutzerklaerungComponent},
  {path: 'aktuelles', component: AktuellesComponent},
  {path: 'kirchenleitung', component: KirchenleitungComponent},
  {path: 'partner', component: PartnerComponent},
  {path: 'über-uns', component: GlaubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
