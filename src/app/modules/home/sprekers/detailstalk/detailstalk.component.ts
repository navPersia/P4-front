import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PollService} from 'src/app/core/services/poll.service';
import {Poll} from 'src/app/shared/models/poll.model.service';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-detailstalk',
  templateUrl: './detailstalk.component.html',
  styleUrls: ['./detailstalk.component.css']
})
export class DetailstalkComponent implements OnInit {

  polls: Poll[] = [];
  poll: Poll;
  closeResult = '';

  constructor(private pollService: PollService,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.pollService.getAllPolls().subscribe(
      response => {
        console.log(response);
        console.log('all rooms work');
        this.polls = response;
        console.log(this.polls);
      })
  }

  newpoll(formData) {
    const data = {
      type: "multi",
      active: false,
      question: formData.question,
      options: formData.options,
      roomID: localStorage.getItem("roomid")
    }

    console.log(data);
    this.pollService.makenewpoll(data).subscribe(() => {
      this.ngOnInit();
    });
  }

  delete(x) {
    this.pollService.deletePoll(x).subscribe(() => {
      console.log("poll verwijderd");
      this.ngOnInit();
    })
  }

  editpoll(id, formData) {
    formData.active = formData.active === "true";
    const data = {
      data: {
        type: "multi",
        active: formData.active,
        question: formData.editquestion,
        options: formData.editoptions,
        roomID: localStorage.getItem("roomid")
      },
      id: id
    }

    this.pollService.modifyPoll(data)
      .subscribe(result => {
        if (result)
          // stuur door na alle rooms overzicht
          this.ngOnInit();
      });
  }

  editModal(content, x) {
    this.poll = x;
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
}
