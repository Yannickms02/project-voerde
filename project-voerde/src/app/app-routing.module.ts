import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung/datenschutzerklaerung.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'datenschutz', component: DatenschutzerklaerungComponent },
  { path: 'aktuelles', component: AktuellesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'projekte', component: ProjekteComponent },
  { path: 'ueber-uns', component: AboutComponent },
  { path: '*', component: HomeComponent } // Not found route -> Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
