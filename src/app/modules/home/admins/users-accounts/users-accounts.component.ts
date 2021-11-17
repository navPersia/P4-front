import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../core/services/account.service.service'
import {User} from '../../../../shared/models/user.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastService} from '../../../../core/services/toast/toast-service.service';
import {Decode} from 'src/app/core/model/decode';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-users-accounts',
  templateUrl: './users-accounts.component.html',
  styleUrls: ['./users-accounts.component.css']
})
export class UsersAccountsComponent implements OnInit {
  users: User[] = [];
  user: User;
  closeResult = '';
  decoded: Decode;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.accountService.getAllUsers().subscribe(
      response => {
        console.log('all user work');
        this.users = response.data;
        console.log(this.users);
      }
    );

  }

  show(header, body, bgColor) {
    this.toastService.show(header, body, bgColor);
  }

  signUp(credentials) {
    console.log("worked");
    console.log(credentials);
    this.accountService.newUser(credentials).subscribe(result => {
      if (result) {
        this.ngOnInit();
        this.show("Success", "User is created", "bg-success");
        this.modalService.dismissAll();
      } else
        this.show("Failed", "can't add user", "bg-danger");
    });
  }

  delete(x) {
    let tok = localStorage.getItem('token');
    this.decoded = jwt_decode(tok);
    if (x != this.decoded.id) {
      this.accountService.deleteUser(x).subscribe(result => {
        this.ngOnInit();
        if (result) {
          this.show("Success", "User is deleted", "bg-success");
        } else
          this.show("Failed", "can't be deleted", "bg-danger");
      });
    } else {
      this.show("Can't be deleted", "You can not delete this account", "bg-danger");
    }
  }

  editModal(content, x) {
    this.user = x;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  modify(id, credentials) {
    console.log("worked");
    console.log(credentials);
    this.accountService.modifyUser(id, credentials).subscribe(result => {
      if (result) {
        this.ngOnInit();
        this.show("Operation succes", "User is modified", "bg-success");
        this.modalService.dismissAll();
      } else
        this.show("Failed", "can't be modified", "bg-danger");
    });
  }

}
