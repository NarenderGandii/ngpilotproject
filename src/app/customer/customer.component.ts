import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';
import {  Users } from '../model/users.model';

import {Observable} from 'rxjs/Rx';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent  {
  customers:Customer[]; 
  closeResult: string;
  documentcontent:string='';
  hasDocument=false;
  private users:Array<Users>=[];
  constructor(private customerService:CustomerService,private modalService: NgbModal) { 
    console.log(modalService);
    this.customers = customerService.getAllCustomers();
   // this.getAllUserData();
       console.log(this.users);
  }

  getAllUserData(){
    this.customerService.getAllUsers()
    .subscribe(
       data => {
          this.users= data;
       }
    )
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }

  private UploadPDFDocument($event){
     //var pdfFile:File = $event.target.files[0];
     for (var i = 0; i < $event.target.files.length; i++) {
      var   pdfFile = $event.target.files[i];
      var pdfReader:FileReader = new FileReader();
      pdfReader.onloadend = (e) => {
          var content =  pdfReader.result;
          //content = content.replace(/^data:application\/pdf;base64,/, "");
          this.hasDocument=true;
          this.documentcontent=content;         
      }
       pdfReader.readAsDataURL(pdfFile);
     }


  }
}
