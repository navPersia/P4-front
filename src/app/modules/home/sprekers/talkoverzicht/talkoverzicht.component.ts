import {Component, OnInit} from '@angular/core';
import {ToastService} from 'src/app/core/services/toast/toast-service.service';
import {Room} from 'src/app/shared/models/room.model';
import {Decode} from 'src/app/core/model/decode';
import {Poll} from 'src/app/shared/models/poll.model.service';
import {PollService} from "../../../../core/services/poll.service";

@Component({
  selector: 'app-talkoverzicht',
  templateUrl: './talkoverzicht.component.html',
  styleUrls: ['./talkoverzicht.component.css']
})
export class TalkoverzichtComponent implements OnInit {

  polls: Poll[] = [];
  room: Room;

  decoded: Decode;

  constructor(
    private pollService: PollService,
    public toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.pollService.getAllPolls().subscribe(
      response => {
        console.log('all rooms work');
        console.log(response);
        this.polls = response;
      }
    );
  }

}
