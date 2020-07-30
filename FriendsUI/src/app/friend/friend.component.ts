import { Component, OnInit } from '@angular/core';
import {Friend} from './friend';
import { HttpClient } from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
friends: Friend[];
closeResult: String;
editForm: FormGroup;
deleteId: number;
  constructor(private httpClient: HttpClient, private modalService: NgbModal, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getFriends();
    this.editForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      department: [''],
      email: [''],
      country: ['']
    } );
  }

  getFriends(){
    this.httpClient.get<any>('http://localhost:8080/friends').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }

  open(content) {
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

  onSubmit(f: NgForm) {
    const url = 'http://localhost:8080/friends/addnew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  openDetails(targetModal, friend: Friend) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
   /*
   targetModal.patchValue({
    fname: friend.firstName,
    lname: friend.lastName,
    depart: friend.department,
    mail: friend.email,
    country2: friend.country
   });*/
   
    document.getElementById('fname').setAttribute('value', friend.firstName);
    document.getElementById('lname').setAttribute('value', friend.lastName);
    document.getElementById('depart').setAttribute('value', friend.department);
    document.getElementById('mail').setAttribute('value', friend.email);
    document.getElementById('country2').setAttribute('value', friend.country);
    
 }
 openEdit(targetModal, friend: Friend) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'lg'
 });
 
 this.editForm.patchValue({
   id:friend.id,
  firstName: friend.firstName,
  lastName: friend.lastName,
  department: friend.department,
  email: friend.email,
  country: friend.country
 });
 
  
}

onSave() {
  const editURL = 'http://localhost:8080/friends/' + this.editForm.value.id + '/edit';
  console.log(this.editForm.value);
  this.httpClient.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}

openDelete(targetModal, friend: Friend) {
   this.deleteId = friend.id;
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
}

onDelete() {
  const deleteURL = 'http://localhost:8080/friends/' + this.deleteId + '/delete';
  this.httpClient.delete(deleteURL)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}

}
