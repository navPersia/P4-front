import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService implements CanActivate {

  constructor(
    private router: Router,
    public authService: AuthService
    ) { }
    canActivate(){
      if (this.authService.isLoggedIn()){
        this.router.navigate(["/home"]);
      return false;
      }

      this.router.navigate(["/login"]);
      return false;
    }

}
