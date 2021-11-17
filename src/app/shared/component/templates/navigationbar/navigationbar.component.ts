import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {

  constructor( public authService: AuthService ) { }

  ngOnInit(): void {
  }

}
