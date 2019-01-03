import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-landmark-dram',
  templateUrl: './landmark-dram.component.html',
  styleUrls: ['./landmark-dram.component.css']
})
export class LandmarkDramComponent implements OnInit {

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
      this.mainPage.isHome = false;
  }

}
