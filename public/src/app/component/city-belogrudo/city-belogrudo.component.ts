import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-city-belogrudo',
  templateUrl: './city-belogrudo.component.html',
  styleUrls: ['./city-belogrudo.component.css']
})
export class CityBelogrudoComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
