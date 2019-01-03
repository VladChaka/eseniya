import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RemoteService } from './remote.service';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private remoteService: RemoteService) { }

    getAll(): Observable<any> { return this.remoteService.getAllAdmins(); }
    update(data: any): Observable<any> { return this.remoteService.updateAdmin(data) }
    del(id: any): Observable<any> { return this.remoteService.delAdmin(id) }
}
