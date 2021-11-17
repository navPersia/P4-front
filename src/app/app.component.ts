import {Component} from '@angular/core';
import {ToastService} from './core/services/toast/toast-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactie-axxes';

  constructor(
    public toastService: ToastService
    ) { }
}
