import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SprekerGuardService {

  constructor(
    private router: Router,
    public authService: AuthService
    ) { }
}
