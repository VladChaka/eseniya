import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-landmark-tarnovo',
  templateUrl: './landmark-tarnovo.component.html',
  styleUrls: ['./landmark-tarnovo.component.css']
})
export class LandmarkTarnovoComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
