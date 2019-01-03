import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-landmark-lidapoezd',
  templateUrl: './landmark-lidapoezd.component.html',
  styleUrls: ['./landmark-lidapoezd.component.css']
})
export class LandmarkLidapoezdComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
