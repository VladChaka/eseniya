import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlConfig = 'http://localhost:4000';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {


  constructor(private http: HttpClient) { }

  authentication(data: any): Observable<any> { return this.useHttpRequest('authentication',  data, 'post') }
  registration(data: any): Observable<any> { return this.useHttpRequest('reigstration',  data, 'post') }

  contactWithManager(data: any): Observable<any> { return this.useHttpRequest('contact',  data, 'post') }
  sendComment(data: any): Observable<any> { return this.useHttpRequest('comment',  data, 'post') }
  rentBike(data: any): Observable<any> { return this.useHttpRequest('order',  data, 'post') }
  addUser(data: any): Observable<any> { return this.useHttpRequest('user',  data, 'post') }
  addNews(data: any): Observable<any> { return this.useHttpRequest('news',  data, 'post') }
  addContakt(data: any): Observable<any> { return this.useHttpRequest('contakt',  data, 'post') }
  
  getLandmarksByCityId(id: any): Observable<any> { return this.useHttpRequest('landmark-city',  id, 'post') }


  updateUser(data: any): Observable<any> { return this.useHttpRequest('user',  data, 'put') }
  updateAdmin(data: any): Observable<any> { return this.useHttpRequest('admin',  data, 'put') }
  updateBike(data: any): Observable<any> { return this.useHttpRequest('bike',  data, 'put') }

  delAdmin(id: any): Observable<any> { return this.useHttpRequest('admin',  id, 'delete') }
  delBike(id: any): Observable<any> { return this.useHttpRequest('bike',  id, 'delete') }
  delBookedBike(id: any): Observable<any> { return this.useHttpRequest('bookedbike',  id, 'delete') }
  delComment(id: any): Observable<any> { return this.useHttpRequest('comment',  id, 'delete') }
  delContact(id: any): Observable<any> { return this.useHttpRequest('contact',  id, 'delete') }
  delOrder(id: any): Observable<any> { return this.useHttpRequest('order', id, 'delete') }


  getAllCitys(): Observable<any> { return this.useHttpRequest('city',  null, 'get') }
  getAllLandmarks(): Observable<any> { return this.useHttpRequest('landmark',  null, 'get') }

  getAllContacts(): Observable<any> { return this.useHttpRequest('contact',  null, 'get') }
  getAllOrders(): Observable<any> { return this.useHttpRequest('order',  null, 'get') }
  getAllAdmins(): Observable<any> { return this.useHttpRequest('admin',  null, 'get') }
  getAllUsers(): Observable<any> { return this.useHttpRequest('user',  null, 'get') }
  getAllBikes(): Observable<any> { return this.useHttpRequest('bike',  null, 'get') }
  getBookedBikes(): Observable<any> { return this.useHttpRequest('bike/booked',  null, 'get') }
  getNeBookedBikes(): Observable<any> { return this.useHttpRequest('bike/nebooked',  null, 'get') }

  useHttpRequest(url: string, data: object, method: string): Observable<any> {
      let result;

      if (method === 'post') {
          result = this.http.post(`${urlConfig}/${url}`, data);
      } else if (method === 'get'){
          result = this.http.get(`${urlConfig}/${url}`);
      } else if (method === 'put') {
          result = this.http.put(`${urlConfig}/${url}`, data);
      } else if (method === 'delete') {
          result = this.http.delete(`${urlConfig}/${url}/${data}`);
      }

      return result;
  }

}
