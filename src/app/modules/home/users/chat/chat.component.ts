import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from 'src/app/core/services/account.service.service';
import {ToastService} from 'src/app/core/services/toast/toast-service.service';
import {Room} from 'src/app/shared/models/room.model';
import {Decode} from 'src/app/core/model/decode';
import jwt_decode from "jwt-decode";
import {Message} from 'src/app/shared/models/message.model';
import 'rxjs/Rx';
import {RoomService} from "../../../../core/services/room.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  room: Room;
  decoded: Decode;
  messages: Message[] = [];
  roomName = '';
  timer;

  constructor(
    private accountService: AccountService,
    private roomService: RoomService,
    private router: Router,
    public toastService: ToastService
  ) {
  }


  ngOnInit(): void {
    const roomId = localStorage.getItem('RId');
    let tok = localStorage.getItem('token');
    this.decoded = jwt_decode(tok);
    const x = {
      "roomId": roomId,
      "userId": this.decoded.id
    };
    this.timer = this.roomService.getChat(x).subscribe(
      response => {
        console.log('all works');
        console.log(response);
        this.messages = response;
      }
    );

    this.accountService.getRoomById(roomId).subscribe(
      response => {
        this.roomName = response.name;
        this.room = response;
      }
    );
  }

  show(header, body, bgColor) {
    this.toastService.show(header, body, bgColor);
  }

  exitChat() {
    localStorage.removeItem('RId');
    this.router.navigate(['/alltalks']);
  }

  openPoll() {
    this.router.navigate(['/poll/' + this.room.id]);
  }

  sendMessage(message) {
    console.log(message);
    const roomId = localStorage.getItem('RId');
    let tok = localStorage.getItem('token');
    this.decoded = jwt_decode(tok);
    const x = {
      "roomId": roomId,
      "userId": this.decoded.id,
      "message": message.message
    };
    this.accountService.sendMessage(x).subscribe(result => {
      if (result) {
        this.show("Success", "message is sended", "bg-success");
      } else {
        this.show("Failed", "message can't be sended", "bg-danger");
      }
    });
  }

  ngOnDestroy(): void {
    this.timer.unsubscribe();
  }
}
