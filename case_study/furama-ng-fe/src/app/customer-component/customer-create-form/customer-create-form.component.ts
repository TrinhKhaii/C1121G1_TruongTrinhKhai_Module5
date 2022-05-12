import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create-form',
  templateUrl: './customer-create-form.component.html',
  styleUrls: ['./customer-create-form.component.css']
})
export class CustomerCreateFormComponent implements OnInit {

  genderList: Array<string> = ['Nam', 'Nữ', 'Khác'];

  customerTypeList: Array<string> = ["Diamond", "Silver", "Member"];

  customerForm: FormGroup = new FormGroup({
    customerCode: new FormControl('', [Validators.pattern("KH-\\d{4}"), Validators.required]),
    customerName: new FormControl('', Validators.required),
    gender: new FormControl(this.genderList[0], Validators.required),
    dayOfBirth: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern("\\d{9}|\\d{12}")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,}){1,}$")]),
    address: new FormControl('', Validators.required),
    customerType: new FormControl(this.customerTypeList[0], Validators.required),
  });

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get customerName() {
    return this.customerForm.get('customerName');
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

  constructor(private route: Router) {}

  ngOnInit(): void {
  }

  submit() {
    console.log("hihi")
    this.route.navigateByUrl('/customer-list');
  }
}
