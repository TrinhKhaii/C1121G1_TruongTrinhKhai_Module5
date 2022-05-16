import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {CustomerType} from "../customer-model/CustomerType";
import {Customer} from "../customer-model/Customer";

@Component({
  selector: 'app-customer-edit-form',
  templateUrl: './customer-edit-form.component.html',
  styleUrls: ['./customer-edit-form.component.css']
})
export class CustomerEditFormComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  customerEditForm: FormGroup;

  genderList: string[] = [];

  customerTypeList: CustomerType[] = [];
  // @ts-ignore
  customer: Customer;

  constructor(private router: Router,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
    })
      this.customerEditForm = new FormGroup({
        customerId: new FormControl(),
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
  }

  compare(a: CustomerType, b: CustomerType): boolean {
    return a && b ? a.customerTypeId === b.customerTypeId : a === b;
  }

  get customerCode() {
    return this.customerEditForm.get('customerCode');
  }

  get customerName() {
    return this.customerEditForm.get('name');
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

  ngOnInit(): void {
    this.getGenderList();
    this.getCustomerTypeList();
    this.customerService.findCustomerById(this.id).subscribe(res => {
      this.customer = res;
      console.log(this.customer)
      this.customerEditForm.patchValue(this.customer);
    });
  }

  getGenderList() {
    this.customerService.getGenderList().subscribe(res => {
      this.genderList = res;
    })
  }

  getCustomerTypeList() {
    this.customerService.getCustomerTypeList().subscribe(res => {
      this.customerTypeList = res;
    })
  }

  submit() {
    const productUpdate = this.customerEditForm.value;
    console.log(productUpdate)
    this.customerService.saveCustomer(productUpdate).subscribe(() => {
      this.customerEditForm.reset();
      console.log('Update success!');
      this.router.navigate(['customer-list']);
    }, error => {
      console.log(error);
    })
  }
}
