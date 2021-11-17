import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate {

  constructor(
    private router: Router,
    public authService: AuthService
    ) { }
    canActivate(){
      if (!this.authService.isLoggedIn()) return true;

      this.router.navigate(["/no-access"]);
      return false;
    }

}
