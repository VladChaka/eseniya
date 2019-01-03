import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { City } from '../../model/City';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-library-catalog',
  templateUrl: './library-catalog.component.html',
  styleUrls: ['./library-catalog.component.css']
})
export class LibraryCatalogComponent implements OnInit {
  citys = [];

  constructor(
    private mapService:MapService,
    private router: Router
  ) { }

  @Input() id: string;

  ngOnInit() {
    this.getAll();
  }

  goToLandmark(id, link) {
    sessionStorage.setItem("idCity", id);
    this.router.navigate([link]);
  }

  getAll() {
    this.mapService.getAll().subscribe(
      citys => {
        let index = 1,
            mass = [];

        citys.forEach(item => {
          if (index % 2 === 0) {            
            mass.push(item);
            this.citys.push(mass);
            mass = [];
            index++;
            return;
          }
          mass.push(item);
          index++;
        });

        if (mass.length !== 0) this.citys.push(mass);
      },
      err => console.log(err)
    )
  }

}
