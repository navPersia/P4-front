import {Component, OnInit} from '@angular/core';
import {AccountService} from 'src/app/core/services/account.service.service';
import {RoomService} from 'src/app/core/services/room.service';
import {Room} from 'src/app/shared/models/room.model';
import {User} from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  rooms : Room[] = [];
  room1: Room;
  user1: User;
  constructor(private roomService: RoomService, private accountService: AccountService){}

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(
      response => {
        console.log(response);
        console.log('all rooms work');
        this.rooms = response;
        console.log(this.rooms);
      })
  }

  details(roomid, userid){
    console.log("test")
    this.roomService.getRoomById(roomid).subscribe(
      response => {
        console.log(response);
        this.room1 = response;
      }
    )
    this.accountService.getUserById(userid).subscribe(
      response => {
        console.log(response);
        this.user1 = response;
      }
    )
  }
}
