import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-landmark-skarbonka',
  templateUrl: './landmark-skarbonka.component.html',
  styleUrls: ['./landmark-skarbonka.component.css']
})
export class LandmarkSkarbonkaComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
