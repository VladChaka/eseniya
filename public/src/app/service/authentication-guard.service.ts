import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(route, state) {
        const urlParse = state.url.split('/')[1];
            
        if (urlParse === 'admin' && !this.authenticationService.isLogged()) {
            this.router.navigate(['']);
        }

        return true;
    }
}
