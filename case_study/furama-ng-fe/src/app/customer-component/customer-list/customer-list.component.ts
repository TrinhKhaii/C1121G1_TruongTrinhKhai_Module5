import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../customer-model/ICustomer";
import {CustomerDao} from "../customer-dao/CustomerDao";
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  constructor(private customerService: CustomerService) { }

  customerList: Array<Customer> = this.customerService.getList();

  ngOnInit(): void {
  }

}
