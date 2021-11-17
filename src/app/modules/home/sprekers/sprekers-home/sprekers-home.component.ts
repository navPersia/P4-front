import {Component, OnInit} from '@angular/core';
import {Decode} from 'src/app/core/model/decode';
import {RoomService} from 'src/app/core/services/room.service';
import {Room} from 'src/app/shared/models/room.model';
import jwt_decode from "jwt-decode";
import {Router} from '@angular/router';


@Component({
  selector: 'app-sprekers-home',
  templateUrl: './sprekers-home.component.html',
  styleUrls: ['./sprekers-home.component.css']
})
export class SprekersHomeComponent implements OnInit {
  rooms: Room[] = [];
  decoded: Decode;

  constructor(
    private roomService: RoomService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    let tok = localStorage.getItem('token');
    this.decoded = jwt_decode(tok);
    this.roomService.getAllRooms().subscribe(
      response => {
        console.log(response);
        console.log('all rooms work');
        for (let room of response) {
          if (room.sprekerId == this.decoded.id) {
            this.rooms.push(room)
          }
        }

        console.log(this.rooms);
      })
  }

  editroom(room) {
    localStorage.setItem('roomid', room.id);
    console.log("stuurt door naar details van room")
    this.router.navigate(["/spreker/detailstalk"])

  }


}
