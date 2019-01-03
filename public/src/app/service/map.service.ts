import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RemoteService } from './remote.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

    constructor(private remoteService: RemoteService) { }

    getAll(): Observable<any> { return this.remoteService.getAllCitys(); }
}
