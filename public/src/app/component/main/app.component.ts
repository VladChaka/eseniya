import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        // private route: Route
    ) {}

    isHome = true;

    logout(): void {
        this.authenticationService.logout();
        this.router.navigate(['']);
    }

    ngOnInit() {
    }

}
