import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isHome = true;

  constructor(private mainPage: AppComponent) { }

  ngOnInit() {
  }

}
