import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { AuthenticationService } from '../../service/authentication.service';
import { LandmarkService } from '../../service/landmark.service';

export interface State {
    img: string;
    name: string;
    population: string;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private landmarkService:LandmarkService
    ) {
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(
                startWith(''),
                map(state => state ? this._filterStates(state) : this.states.slice())
                // map(state => state ? this._filterStates(state) : this.landmarks.slice())
            );
    }

    private _filterStates(value: string): State[] {
        const filterValue = value.toLowerCase();

        // return this.landmarks.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }

    stateCtrl = new FormControl();
    filteredStates: Observable<State[]>;

    states: State[] = [];

    isHome = true;

    logout(): void {
        this.authenticationService.logout();
        this.router.navigate(['']);
    }

    landmarks = [];
    city: string;
    
    ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.landmarkService.getAllLandmarks().subscribe(
        landmarks => {
            this.states = landmarks;
            console.log(landmarks);
        },
        err => console.log(err)
      )
    }

}
