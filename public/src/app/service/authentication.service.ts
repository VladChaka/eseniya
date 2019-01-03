import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RemoteService } from './remote.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    token = localStorage['token'];
    userAuthentication: any = !this.token ? false : true;

    constructor(
        private remoteService: RemoteService
    ) { }

    registration(registrationInfo): Observable<any> {
        return this.remoteService.registration(registrationInfo);
    }

    authentication(authenticationInfo): Observable<any> {
        return this.remoteService.authentication(authenticationInfo);
    }

    isLogged(): Observable<any> {      
        return this.userAuthentication;
    }

    logout(): void {
        localStorage.clear();
        this.userAuthentication = false;
    }
}
