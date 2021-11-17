import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {RoomService} from 'src/app/core/services/room.service';
import {Room} from 'src/app/shared/models/room.model';
import {User} from "../../../../shared/models/user.model";
import {AccountService} from '../../../../core/services/account.service.service';
import {Router} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../../../core/services/toast/toast-service.service";

@Component({
  selector: 'app-allrooms',
  templateUrl: './allrooms.component.html',
  styleUrls: ['./allrooms.component.css']
})
export class AllroomsComponent implements OnInit {
  decline: boolean;
  success: boolean;
  successDelete: boolean;
  rooms: Room[] = [];
  users: User[] = [];
  room: Room;
  closeResult = '';

  constructor(
    private roomService: RoomService,
    private http: HttpClient,
    private modalService: NgbModal,
    public toastService: ToastService,
    public accountservice: AccountService,
    ) {
  }

  ngOnInit(): void {
    this.accountservice.getAllUsers().subscribe(
      response => {

        let array = response.data
        for (let i = 0; i < array.length; i++) {
          if (array[i].role !== "Spreker" && array[i].role !== "Admin") array.splice(i, 1);
        }
        this.users = array;
      }
    );
    this.roomService.getAllRooms().subscribe(
      response => {
        this.rooms = response;
      });
  }

  fixTimeFormat(time) {
    return time.split('T')[1].slice(0, 5);
  }

  newroom(formData) {
    let dateNow = new Date();
    const date = dateNow.getFullYear() + "-" + ("0" + (dateNow.getMonth() + 1)).slice(-2) + "-" + ("0" + dateNow.getDate()).slice(-2);
    const startDate = date + " " + formData.startDate;
    const endDate = date + " " + formData.endDate;
    const data = {
      name: formData.name,
      info: formData.info,
      startDate: startDate,
      endDate: endDate,
      userID: parseInt(formData.sprekerID)
    }
    this.roomService.makenewroom(data)
      .subscribe(result => {
        if (result)
          // stuur door na alle rooms overzicht
          this.ngOnInit();
      });
  }

  editroom(room, formData) {
    const dateNow = new Date();
    const dateYear = dateNow.getFullYear() + "-" + ("0" + (dateNow.getMonth() + 1)).slice(-2) + "-" + ("0" + dateNow.getDate()).slice(-2);
    let startDate: string;
    let endDate: string;

    let date = new Date(room.startDate);
    startDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    if (startDate == "NaN-aN-aN NaN:NaN:NaN") startDate = dateYear + " " + formData.startDate + ":00";


    date = new Date(room.endDate);
    endDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    if (endDate == "NaN-aN-aN NaN:NaN:NaN") endDate = dateYear + " " + formData.endDate + ":00";

    const data = {
      data: {
        name: formData.name,
        info: formData.info,
        startDate: startDate,
        endDate: endDate,
        sprekerId: parseInt(formData.sprekerID)
      },
      id: room.id
    }

    this.roomService.modifyRoom(data)
      .subscribe(result => {
        if (result)
          // stuur door na alle rooms overzicht
          this.ngOnInit();
      });
  }

  editModal(content, x) {
    this.room = x;
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

  delete(x) {
    // // Our callback function is called if/when the delete modal is confirmed
    // this.delete = Modal.confirm.delete(x => {
    //   this.delete(x);
    // });
    this.roomService.deleteRoom(x).subscribe(result => {
      console.log(result);
      this.ngOnInit();
      this.successDelete = true;
    });
  }
}
