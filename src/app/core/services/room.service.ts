import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  getAllRooms() {
    const token = localStorage.getItem('token');
    return this.http.get<any>(environment.urlAPI + '/room/all', {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    })
  }

  getRoomById(id) {
    const token = localStorage.getItem('token');
    return this.http.get<any>(environment.urlAPI + '/room/' + id, {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    })
  }


  makenewroom(data) {
    console.log(data);
    const token = localStorage.getItem('token');
    return this.http.post(environment.urlAPI + '/room/make', data, {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    }).map(response => {
      console.log(response);
      return response;
    });
  }

  modifyRoom(data) {
    const token = localStorage.getItem('token');
    return this.http.put(environment.urlAPI + '/room/edit', data, {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    }).map(response => {
      let result = response;
      if (result) {
        console.log(result);
        return true;
      } else {
        return false;
      }
    });
  }

  deleteRoom(x) {
    const token = localStorage.getItem('token');
    return this.http.delete(environment.urlAPI + `/room/delete/${x}`, {
      headers: new HttpHeaders().set('x-access-token', token)
    }).map(response => {
      console.log(response);
    });
  }

  getChat(x) {
    const token = localStorage.getItem('token');
    return Observable.interval(2500)
      .flatMap(() =>
        this.http.post<any>(environment.urlAPI + '/chat/get', x, {
          headers: new HttpHeaders()
            .set('x-access-token', token)
        })
      )
  }

}
