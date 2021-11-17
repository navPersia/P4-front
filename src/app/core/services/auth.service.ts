import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import jwt_decode from "jwt-decode";
import {Decode} from "../model/decode";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  decoded: Decode;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  isLoggedIn() {
    // return tokenNotExpired();
    let jwtHelper = new JwtHelperService();
    let accessToken = localStorage.getItem('token');
    if (!accessToken) {
      return false;
    } else {
      jwtHelper.getTokenExpirationDate(accessToken);
      let isExpired = jwtHelper.isTokenExpired(accessToken);
      // console.log("Expiration", expirationDate);
      // console.log("Expired", isExpired);
      return !isExpired;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/']);
  }

  login(credentials) {
    return this.http.post(environment.urlAPI + '/users/login',
      credentials)
      .map(response => {
        let result = response;
        if (result && result["AccessToken"]) {
          localStorage.setItem('token', result["AccessToken"]);
          return true;
        } else {
          return false;
        }
      });
  }

  isAdmin() {
    let tok = localStorage.getItem('token');
    this.decoded = jwt_decode(tok);
    let jwtHelper = new JwtHelperService();
    let accessToken = localStorage.getItem('token');
    let isExpired = jwtHelper.isTokenExpired(accessToken);
    return this.decoded.role == "Admin" && !isExpired;
  }

  isSpreker() {
    let tok = localStorage.getItem('token');
    this.decoded = jwt_decode(tok);
    let jwtHelper = new JwtHelperService();
    let accessToken = localStorage.getItem('token');
    let isExpired = jwtHelper.isTokenExpired(accessToken);
    return this.decoded.role == "Spreker" && !isExpired;
  }

  isUser() {
    let tok = localStorage.getItem('token');
    this.decoded = jwt_decode(tok);
    let jwtHelper = new JwtHelperService();
    let accessToken = localStorage.getItem('token');
    let isExpired = jwtHelper.isTokenExpired(accessToken);
    return this.decoded.role == "User" && !isExpired;
  }

}
