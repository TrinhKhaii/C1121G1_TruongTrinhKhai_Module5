import {Injectable, OnInit} from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit{
  customerList: Array<Customer> = [];

  constructor() {
    this.customerList.push(new Customer(1, "KH-001", "Trương Trịnh Khải", "Nam", "21/12/2001", "48201123321", "0901960777", "truongtrinhkhaidng@gmail.com", "21 Nguyễn Khang", false, "Diamond"));
  }

  ngOnInit(): void {
  }

  getList() {
    return this.customerList;
  }

  addCustomer(event: any) {
    this.customerList.push(event);
  }

  findById(id: number) {
    for (let customer of this.customerList) {
      if (customer.customerId == id) {
        return customer;
      }
    }
    return null;
  }
}
