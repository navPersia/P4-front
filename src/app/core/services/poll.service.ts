import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from "../../../environments/environment";
import jwt_decode from "jwt-decode";
import {Decode} from "../model/decode";

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  getAllPolls() {
    const token = localStorage.getItem('token');
    return this.http.get<any>(environment.urlAPI + '/poll/get', {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    })
  }

  getPollById(id) {
    const token = localStorage.getItem('token');
    return this.http.get<any>(environment.urlAPI + '/poll/get/' + id, {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    })
  }

  makenewpoll(data) {
    console.log(data);
    const token = localStorage.getItem('token');
    return this.http.post(environment.urlAPI + '/poll/make', data, {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    }).map(response => {
      console.log(response);
      return response;
    });
  }

  modifyPoll(data) {
    const token = localStorage.getItem('token');
    return this.http.put(environment.urlAPI + '/poll/edit', data, {
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

  deletePoll(x) {
    const token = localStorage.getItem('token');
    return this.http.delete(environment.urlAPI + `/poll/delete/${x}`, {
      headers: new HttpHeaders().set('x-access-token', token)
    }).map(response => {
      console.log(response);
    });
  }

  vote(answer, pollId) {
    const token = localStorage.getItem('token');
    const decode: Decode = jwt_decode(token);
    return this.http.post(environment.urlAPI + '/poll/answer', {
      userId: parseInt(decode.id),
      pollId: parseInt(pollId),
      answer: answer
    }, {
      headers: new HttpHeaders().set('x-access-token', token)
    }).map(response => {
      return response;
    });
  }

  getanswers(pollId) {
    const token = localStorage.getItem('token');
    console.log(pollId);
    return this.http.get<any>(environment.urlAPI + '/poll/count/' + pollId, {
      headers: new HttpHeaders()
        .set('x-access-token', token)
    })
  }
}
