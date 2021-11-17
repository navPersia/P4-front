import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  getAllUsers() {
    const token = localStorage.getItem('token');
    return this.http.get<any>(environment.urlAPI + '/users', {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    })
  }

  getUserById(id) {
    const token = localStorage.getItem('token');
    return this.http.get<any>(environment.urlAPI + '/users/' + id, {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    })
  }

  sendMessage(credentials) {
    const token = localStorage.getItem('token');
    return this.http.post<any>(environment.urlAPI + '/chat/send', credentials, {
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

  newUser(x) {
    const token = localStorage.getItem('token');
    return this.http.post(environment.urlAPI + '/users', x, {
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

  modifyUser(id, x) {
    const token = localStorage.getItem('token');
    return this.http.post(environment.urlAPI + `/users/${id}`, x, {
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

  deleteUser(x) {
    const token = localStorage.getItem('token');
    return this.http.delete(environment.urlAPI + `/users/${x}`, {
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

  makenewroom(credentials) {
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    console.log(header);
    return this.http.post(environment.urlAPI + '/room/make', {headers: header},
      credentials)
      .map(response => {
        return response;
      });
  }

  joinRoom(x) {
    const token = localStorage.getItem('token');
    return this.http.post(environment.urlAPI + '/room/join', x, {
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

}
