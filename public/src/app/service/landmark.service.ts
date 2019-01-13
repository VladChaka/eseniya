import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RemoteService } from './remote.service';

@Injectable({
    providedIn: 'root'
})
export class LandmarkService {

    constructor(private remoteService: RemoteService) { }

    getAll(id): Observable<any> { return this.remoteService.getLandmarksByCityId(id); }
    getAllLandmarks(): Observable<any> { return this.remoteService.getAllLandmarks(); }
}
