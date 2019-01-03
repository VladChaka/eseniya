import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-landmark-bogdan',
  templateUrl: './landmark-bogdan.component.html',
  styleUrls: ['./landmark-bogdan.component.css']
})
export class LandmarkBogdanComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
