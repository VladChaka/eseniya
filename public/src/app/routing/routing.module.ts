import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "../component/home/home.component";
import { CatalogComponent } from "../component/catalog/catalog.component";
import { CatalogLandmarkComponent } from "../component/catalog-landmark/catalog-landmark.component";
import { ContactsComponent } from "../component/contacts/contacts.component";
import { AboutComponent } from "../component/about/about.component";

/**
 * Landmark
 */
import { LandmarkDramComponent } from "../component/landmark-dram/landmark-dram.component";
import { LandmarkBogdanComponent } from "../component/landmark-bogdan/landmark-bogdan.component";
import { LandmarkSkarbonkaComponent } from "../component/landmark-skarbonka/landmark-skarbonka.component";
import { LandmarkLidaComponent } from "../component/landmark-lida/landmark-lida.component";
import { LandmarkLidapoezdComponent } from "../component/landmark-lidapoezd/landmark-lidapoezd.component";
import { LandmarkTarnovoComponent } from "../component/landmark-tarnovo/landmark-tarnovo.component";
import { LandmarkBelogrudoComponent } from "../component/landmark-belogrudo/landmark-belogrudo.component";
import { LandmarkYukonComponent } from "../component/landmark-yukon/landmark-yukon.component";
import { LandmarkMayakComponent } from "../component/landmark-mayak/landmark-mayak.component";
import { LandmarkChehovComponent } from "../component/landmark-chehov/landmark-chehov.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'catalog/:name',
    component: CatalogLandmarkComponent
  },
  {
    path: 'catalog/grodno/dram',
    component: LandmarkDramComponent
  },
  {
    path: 'catalog/grodno/bogdan',
    component: LandmarkBogdanComponent
  },
  {
    path: 'catalog/grodno/skarbonka',
    component: LandmarkSkarbonkaComponent
  },
  {
    path: 'catalog/lida/zamok',
    component: LandmarkLidaComponent
  },
  {
    path: 'catalog/lida/lidapoezd',
    component: LandmarkLidapoezdComponent
  },
  {
    path: 'catalog/lida/kafe-yukon',
    component: LandmarkYukonComponent
  },
  {
    path: 'catalog/lida/club-mayak',
    component: LandmarkMayakComponent
  },
  {
    path: 'catalog/lida/chehov-bar',
    component: LandmarkChehovComponent
  },
  {
    path: 'catalog/tarnovo/ysad',
    component: LandmarkTarnovoComponent
  },
  {
    path: 'catalog/belogrudo/b',
    component: LandmarkBelogrudoComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
