import { Component, ViewChild, OnInit } from '@angular/core';
// import { } from 'googlemaps';
import { MapService } from '../../service/map.service';
import { MouseEvent } from '@agm/core';

import { Marker } from '../../model/Marker';


@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.css']
})
export class MapHomeComponent implements OnInit {

  constructor(private mapService:MapService) { }
    citys;
    zoom: number = 6;
    //center
    lat: number = 53.895339;
    lng: number = 27.554285;

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.mapService.getAll().subscribe(
            citys => {this.citys = citys; console.log(this.citys) },
            err => console.log(err)
        )
    }

    markers: Marker[] = [
      {
          lat: 53.677894,
          lng: 23.823305,
          label: '',
          draggable: true,
          info: 'Гродно'
      },
      {
          lat: 53.892432,
          lng: 25.302675,
          label: '',
          draggable: false,
          info: 'Лида'
      },
      {
          lat: 53.792184,
          lng: 25.145985,
          label: '',
          draggable: true,
          info: 'Тарново'
      }
    ];

}
