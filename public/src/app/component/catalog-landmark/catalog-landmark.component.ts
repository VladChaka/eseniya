import { Component, OnInit } from '@angular/core';

import { LandmarkService } from '../../service/landmark.service';

@Component({
  selector: 'app-catalog-landmark',
  templateUrl: './catalog-landmark.component.html',
  styleUrls: ['./catalog-landmark.component.css']
})
export class CatalogLandmarkComponent implements OnInit {
  landmarks = [];
  city: string;

  constructor(private landmarkService:LandmarkService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    let id = { id: sessionStorage.getItem('idCity') };
    this.landmarkService.getAll(id).subscribe(
      landmarks => {
        this.city = landmarks.city;
        
        let index = 1,
            mass = [];
        
        landmarks.data.forEach(item => {
          if (index % 2 === 0) {            
            mass.push(item);
            this.landmarks.push(mass);
            mass = [];
            index++;
            return;
          }
          mass.push(item);
          index++;
        });

        if (mass.length !== 0) this.landmarks.push(mass);
      },
      err => console.log(err)
    )
  }
}
