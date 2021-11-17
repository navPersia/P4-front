import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from 'src/app/core/services/account.service.service';
import {ToastService} from 'src/app/core/services/toast/toast-service.service';
import {Room} from 'src/app/shared/models/room.model';
import {Decode} from 'src/app/core/model/decode';
import jwt_decode from "jwt-decode";
import {ChatComponent} from '../chat/chat.component';
import {RoomService} from "../../../../core/services/room.service";

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {
  @ViewChild(ChatComponent) child;

  rooms: Room[] = [];
  room: Room;

  decoded: Decode;

  constructor(
    private accountService: AccountService,
    private roomService: RoomService,
    private router: Router,
    public toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(
      response => {
        console.log('all rooms work');
        console.log(response);
        this.rooms = response;
      }
    );
    let rid = localStorage.getItem('RId');
    if (rid) {
      this.router.navigate(['/chat']);
    }
  }

  joinRoom(roomId) {
    let tok = localStorage.getItem('token');
    this.decoded = jwt_decode(tok);
    const x = {
      "roomId": roomId,
      "userId": this.decoded.id
    };

    this.accountService.joinRoom(x).subscribe(
      response => {
        console.log('all works');
        console.log(response);
        this.router.navigate(['/chat']);
      }
    );
    localStorage.setItem('RId', x.roomId);
  }

}
