import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
    this.mainPage.isHome = false;
  }

}
