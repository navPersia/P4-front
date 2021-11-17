import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastService} from 'src/app/core/services/toast/toast-service.service';
import {AuthService} from '../../../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService,
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  show(header, body, bgColor) {
    this.toastService.show(header,body,bgColor);
  }

  signIn(credentials) {
    console.log(credentials);
    this.authService.login(credentials)
      .subscribe(result => {
        if (result){
          this.router.navigate(['/']);
        }
        else{
          console.log("failed login");
          this.show("Failed", "Incorrect username or password", "bg-danger");
        }
      }
    );
  }

}
