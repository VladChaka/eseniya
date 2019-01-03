import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-landmark-belogrudo',
  templateUrl: './landmark-belogrudo.component.html',
  styleUrls: ['./landmark-belogrudo.component.css']
})
export class LandmarkBelogrudoComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
