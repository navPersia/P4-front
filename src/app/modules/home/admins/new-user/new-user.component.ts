import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../core/services/account.service.service'
import {User} from '../../../../shared/models/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  decline: boolean;
  success: boolean;
  users: User[] = [];
  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

}
