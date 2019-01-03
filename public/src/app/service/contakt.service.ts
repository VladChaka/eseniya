import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RemoteService } from './remote.service';

@Injectable({
  providedIn: 'root'
})
export class ContaktService {

  constructor(private remoteService: RemoteService) { }
  add(email): Observable<any> { return this.remoteService.addContakt(email); }
}