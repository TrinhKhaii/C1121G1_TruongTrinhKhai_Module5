import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer-model/Customer";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  totalPages = 0;
  // @ts-ignore
  pageNumber: number;
  searchName = '';
  // @ts-ignore
  idDelete = 0;
  nameDelete = '';
  // @ts-ignore
  customerDelete: Customer;
  flag = false;
  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    console.log("%cBỏ đê thầy ei", "color: red; font-size: xxx-large");
    this.getAllCustomer('');
  }

  getAllCustomer(searchValue: string) {
    this.customerService.getList(searchValue, this.pageNumber).subscribe(customers => {
      this.flag = false;
      // @ts-ignore
      this.customers = customers.content;
      console.log(customers)
      console.log(this.customers);
      // @ts-ignore
      this.totalPages = customers.totalPages;
      // @ts-ignore
      this.pageNumber = customers.pageable.pageNumber;
    }, error => {
      this.customers = [];
      this.flag = true;
    });
  }

  sendNameProduct(idValue: number, nameValue: string) {
    this.idDelete = idValue;
    this.nameDelete = nameValue;
  }

  deleteProduct(closeModal: HTMLButtonElement) {
    this.customerService.findCustomerById(this.idDelete).subscribe(res => {
      this.customerDelete = res;
      console.log(this.customerDelete)
      this.customerService.deleteCustomer(this.customerDelete).subscribe(() => {
        console.log("Delete success!");
        this.router.navigate(['customer-list']);
        this.ngOnInit();
        closeModal.click();
      })
    })
  }

  previousPage() {
    this.customerService.getList(this.searchName, this.pageNumber - 1).subscribe(customers => {
      // @ts-ignore
      this.customers = customers.content;
      // @ts-ignore
      this.totalPages = products.totalPages;
      // @ts-ignore
      this.pageNumber = products.pageable.pageNumber;
    });
  };

  nextPage() {
    this.customerService.getList(this.searchName, this.pageNumber + 1).subscribe(customers => {
      // @ts-ignore
      this.customers = customers.content;
      // @ts-ignore
      this.totalPages = products.totalPages;
      // @ts-ignore
      this.pageNumber = products.pageable.pageNumber;
    });
  }

  search() {
    this.getAllCustomer(this.searchName);
  }
}
