import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerType} from "../customer-model/CustomerType";
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../customer-model/Customer";

@Component({
  selector: 'app-customer-create-form',
  templateUrl: './customer-create-form.component.html',
  styleUrls: ['./customer-create-form.component.css']
})
export class CustomerCreateFormComponent implements OnInit {

  genderList: string[] = [];

  customerTypeList: CustomerType[] = [];

  // @ts-ignore
  customer: Customer;

  customerForm: FormGroup = new FormGroup({
    customerCode: new FormControl('', [Validators.pattern("KH-\\d{4}"), Validators.required]),
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dayOfBirth: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern("\\d{9}|\\d{12}")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,}){1,}$")]),
    address: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
  });

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get customerName() {
    return this.customerForm.get('name');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get dayOfBirth() {
    return this.customerForm.get('dayOfBirth');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phoneNumber() {
    return this.customerForm.get('phoneNumber');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  constructor(private customerService: CustomerService, private route: Router) {}

  ngOnInit(): void {
    this.getCustomerTypeList();
    this.getGenderList();
  }

  getGenderList() {
    this.customerService.getGenderList().subscribe(res => {
      this.genderList = res;
      this.customerForm.controls['gender'].setValue(this.genderList[0]);
    })
  }

  getCustomerTypeList() {
    this.customerService.getCustomerTypeList().subscribe(res => {
      this.customerTypeList = res;
      this.customerForm.controls['customerType'].setValue(this.customerTypeList[0]);
    })
  }

  submit() {
    this.customer = this.customerForm.value;
    console.log(this.customer);
    this.customerService.saveCustomer(this.customer).subscribe(() => {
      this.customerForm.reset();
      this.route.navigateByUrl('/customer-list');
      console.log("Add success!")
    }, error => {
      console.log(error);
    })
  }
}
