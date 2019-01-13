import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

/* Main component */
import { AppComponent } from './component/main/app.component';
import { AboutUsMainComponent } from './component/about-us-main/about-us-main.component';
import { MostPopularComponent } from './component/most-popular/most-popular.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { TitleAboutComponent } from './component/title-about/title-about.component';
import { VisionStatmentAboutComponent } from './component/vision-statment-about/vision-statment-about.component';
import { ValuesAboutComponent } from './component/values-about/values-about.component';
import { BoartOftrusteesAboutComponent } from './component/boart-oftrustees-about/boart-oftrustees-about.component';
import { LibraryFidingAboutComponent } from './component/library-fiding-about/library-fiding-about.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { SidebarHomeComponent } from './component/sidebar-home/sidebar-home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

/**
 * Slider
 */
import { SliderOnemoreMainComponent } from './component/slider-onemore-main/slider-onemore-main.component';
import { SliderMainComponent } from './component/slider-main/slider-main.component';
import { CarouselComponent } from './component/carousel/carousel.component';

/**
 * News
 */
import { NewsComponent } from './component/news/news.component';
import { NewsLastVideoComponent } from './component/news-last-video/news-last-video.component';
import { NewsLastNewsComponent } from './component/news-last-news/news-last-news.component';
import { NewsMainComponent } from './component/news-main/news-main.component';

/**
 * Map
 */
import { MapComponent } from './component/map/map.component';
import { MapHomeComponent } from './component/map-home/map-home.component';

/**
 * Contact
 */
import { ContactsMapComponent } from './component/contacts-map/contacts-map.component';
import { ContactsLableComponent } from './component/contacts-lable/contacts-lable.component';
import { ContactsFormComponent } from './component/contacts-form/contacts-form.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ContaktMainComponent } from './component/contakt-main/contakt-main.component';

/**
 * Service
 */
import { ServicesUsingLibraryComponent } from './component/services-using-library/services-using-library.component';
import { ServicesListComponent } from './component/services-list/services-list.component';
import { ServicesPremiupListComponent } from './component/services-premiup-list/services-premiup-list.component';
import { ServicesComponent } from './component/services/services.component';

/**
 * Catalog
 */
import { CatalogMapComponent } from './component/catalog-map/catalog-map.component';
import { LibraryCatalogComponent } from './component/library-catalog/library-catalog.component';
import { CatalogFormComponent } from './component/catalog-form/catalog-form.component';
import { CatalogComponent } from './component/catalog/catalog.component';
import { CatalogLandmarkComponent } from './component/catalog-landmark/catalog-landmark.component';

/**
 * City
 */
import { CityGrodnoComponent } from './component/city-grodno/city-grodno.component';
import { CityLidaComponent } from './component/city-lida/city-lida.component';
import { CityTarnovoComponent } from './component/city-tarnovo/city-tarnovo.component';
import { CityBelogrudoComponent } from "./component/city-belogrudo/city-belogrudo.component";

/**
 * Landmark
 */
import { LandmarkDramComponent } from './component/landmark-dram/landmark-dram.component';
import { LandmarkBogdanComponent } from './component/landmark-bogdan/landmark-bogdan.component';
import { LandmarkSkarbonkaComponent } from './component/landmark-skarbonka/landmark-skarbonka.component';
import { LandmarkTarnovoComponent } from './component/landmark-tarnovo/landmark-tarnovo.component';
import { LandmarkLidaComponent } from './component/landmark-lida/landmark-lida.component';
import { LandmarkLidapoezdComponent } from './component/landmark-lidapoezd/landmark-lidapoezd.component';
import { LandmarkBelogrudoComponent } from './component/landmark-belogrudo/landmark-belogrudo.component';
import { LandmarkYukonComponent } from './component/landmark-yukon/landmark-yukon.component';
import { LandmarkMayakComponent } from './component/landmark-mayak/landmark-mayak.component';
import { LandmarkChehovComponent } from './component/landmark-chehov/landmark-chehov.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AboutUsMainComponent,
    NewsMainComponent,
    SliderMainComponent,
    MostPopularComponent,
    SliderOnemoreMainComponent,
    ContaktMainComponent,
    AboutComponent,
    HomeComponent,
    TitleAboutComponent,
    VisionStatmentAboutComponent,
    ValuesAboutComponent,
    BoartOftrusteesAboutComponent,
    LibraryFidingAboutComponent,
    CatalogComponent,
    ServicesComponent,
    NewsComponent,
    ContactsComponent,
    LibraryCatalogComponent,
    CatalogFormComponent,
    ServicesUsingLibraryComponent,
    ServicesListComponent,
    ServicesPremiupListComponent,
    NewsLastVideoComponent,
    NewsLastNewsComponent,
    ContactsMapComponent,
    ContactsLableComponent,
    ContactsFormComponent,
    PrivacyComponent,
    MapComponent,
    CatalogMapComponent,
    CityGrodnoComponent,
    LandmarkDramComponent,
    LandmarkBogdanComponent,
    LandmarkSkarbonkaComponent,
    CityLidaComponent,
    CityTarnovoComponent,
    LandmarkTarnovoComponent,
    LandmarkLidaComponent,
    LandmarkLidapoezdComponent,
    MapHomeComponent,
    SidebarHomeComponent,
    CityBelogrudoComponent,
    LandmarkBelogrudoComponent,
    CatalogLandmarkComponent,
    LandmarkYukonComponent,
    LandmarkMayakComponent,
    LandmarkChehovComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    GalleryModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-rHypS9cmVkcM86ERm8omnL-_szNG84M'
    }),
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
