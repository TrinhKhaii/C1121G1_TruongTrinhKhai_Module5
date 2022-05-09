import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../customer-model/ICustomer";
import {CustomerDao} from "../customer-dao/CustomerDao";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: ICustomer[] = CustomerDao.customerList;

  constructor() { }

  ngOnInit(): void {
  }

}
