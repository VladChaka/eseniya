import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../main/app.component";

@Component({
    selector: 'app-city-lida',
    templateUrl: './city-lida.component.html',
    styleUrls: ['./city-lida.component.css']
})
export class CityLidaComponent implements OnInit {

    constructor(private mainPage: AppComponent) { }

    ngOnInit() {
        this.mainPage.isHome = false;
        
    }

}
