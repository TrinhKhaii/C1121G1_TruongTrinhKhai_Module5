import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-edit-form',
  templateUrl: './customer-edit-form.component.html',
  styleUrls: ['./customer-edit-form.component.css']
})
export class CustomerEditFormComponent implements OnInit {
  genderList: Array<string> = ["Nam", "Nữ", "Khác"];

  customerTypeList: Array<string> = ["Diamond", "Silver", "Member"];

  customerEditForm: FormGroup = new FormGroup({
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
    return this.customerEditForm.get('customerCode');
  }

  get customerName() {
    return this.customerEditForm.get('customerName');
  }

  get gender() {
    return this.customerEditForm.get('gender');
  }

  get dayOfBirth() {
    return this.customerEditForm.get('dayOfBirth');
  }

  get idCard() {
    return this.customerEditForm.get('idCard');
  }

  get phoneNumber() {
    return this.customerEditForm.get('phoneNumber');
  }

  get email() {
    return this.customerEditForm.get('email');
  }

  get address() {
    return this.customerEditForm.get('address');
  }

  get customerType() {
    return this.customerEditForm.get('customerType');
  }

  constructor(private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);

  }

  submit() {

  }
}
