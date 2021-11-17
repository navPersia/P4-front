import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PollService} from "../../../../core/services/poll.service";
import {Poll} from "../../../../shared/models/poll.model.service";
import {ToastService} from 'src/app/core/services/toast/toast-service.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Voteuser } from 'src/app/shared/models/voteuser.model';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  roomId: number = 0;
  // Defautl value so if there is no poll you can still see poll functions
  poll: Poll = new Poll(0, "multi", true, "No active poll", "No;poll;active", 0);
  options: Array<String> = ["No", "poll", "active"];
  voted: boolean = false;
  votes: Voteuser[] [];
  pollid: number;
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pollService: PollService,
    public toastService: ToastService,
    public authService: AuthService
  ) {
  }

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
    this.pollService.getAllPolls().subscribe(
      response => {
        for (let i = 0; i < response.length; i++) {
          let poll: Poll = response[i];
          poll.active = response[i].active.data[0];
          if (poll.roomId == this.roomId && poll.active) {
            this.poll = poll;
            this.pollid = poll.id;
            console.log(this.pollid);
            this.options = poll.options.split(";");
          }
        }
      });
  }

  answer(value) {
    let answer = value.btnradio;
    if (!this.voted) {
      this.pollService.vote(answer, this.poll.id).subscribe(result => {
        if (result) {
          this.voted = true;
          this.toastService.show("Success", "Voted", "bg-success");
        }
      });
    } else {
      this.toastService.show("Success", "Already voted.", "bg-success");
    }
    this.collectanswers();
  }

  collectanswers(){
    this.pollService.getanswers(this.pollid).subscribe(
      response => {
        this.votes = response;
        this.count1 = 0;
        this.count2 = 0;
        this.count3 = 0;
        for (let item of response) {
          if (item.answer === this.options[0]) {
            this.count1 ++;
          } 
          if (item.answer === this.options[1]) {
            this.count2 ++;
          } 
          if (item.answer === this.options[2]) {
            this.count3 ++;
          } 
        }
      });
  }

}
