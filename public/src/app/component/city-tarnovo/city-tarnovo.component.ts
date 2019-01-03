import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-city-tarnovo',
  templateUrl: './city-tarnovo.component.html',
  styleUrls: ['./city-tarnovo.component.css']
})
export class CityTarnovoComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
