import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RemoteService } from './remote.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private remoteService: RemoteService) { }
  add(email): Observable<any> { return this.remoteService.addNews(email); }
}
