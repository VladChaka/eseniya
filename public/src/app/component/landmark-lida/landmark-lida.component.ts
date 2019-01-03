import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-landmark-lida',
  templateUrl: './landmark-lida.component.html',
  styleUrls: ['./landmark-lida.component.css']
})
export class LandmarkLidaComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
