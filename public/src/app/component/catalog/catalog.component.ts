import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
    this.mainPage.isHome = false;
  }

}
