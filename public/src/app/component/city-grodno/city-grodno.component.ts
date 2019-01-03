import { Component, OnInit } from '@angular/core';

import { LandmarkService } from '../../service/landmark.service';
import { AppComponent } from "../main/app.component";

@Component({
    selector: 'app-city-grodno',
    templateUrl: './city-grodno.component.html',
    styleUrls: ['./city-grodno.component.css']
})
export class CityGrodnoComponent implements OnInit {
    grodno = [];
    constructor(
        private mainPage: AppComponent,
        private landmarkService:LandmarkService
        ) { }

    ngOnInit() {
        this.mainPage.isHome = false;
        this.getAll();
        
    }

    getAll() {
      this.landmarkService.getAll({ id: '5c143af5a8d9f24c08759a02'}).subscribe(
        grodno => {
          let index = 1,
              mass = [];
          console.log(grodno);
          
          grodno.forEach(item => {
            if (index % 2 === 0) {            
              mass.push(item);
              this.grodno.push(mass);
              mass = [];
              index++;
              return;
            }
            mass.push(item);
            index++;
          });
  
          if (mass.length !== 0) this.grodno.push(mass);
        },
        err => console.log(err)
      )
    }

}
