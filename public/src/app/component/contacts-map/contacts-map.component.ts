import { Component, OnInit } from '@angular/core';

import { Marker } from '../../model/Marker';

@Component({
  selector: 'app-contacts-map',
  templateUrl: './contacts-map.component.html',
  styleUrls: ['./contacts-map.component.css']
})
export class ContactsMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  zoom: number = 17;
    //center
    lat: number = 53.689246;
    lng: number = 23.803451;

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
