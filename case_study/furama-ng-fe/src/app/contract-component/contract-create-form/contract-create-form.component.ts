import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contract-create-form',
  templateUrl: './contract-create-form.component.html',
  styleUrls: ['./contract-create-form.component.css']
})
export class ContractCreateFormComponent implements OnInit {
  employeeList: Array<string> = ['Trịnh Khải', 'Hậu mõm', 'Tâm bê đê'];

  customerList:Array<string> = ['Tâm bê đê', 'Trịnh Khải', 'Hậu mõm'];

  serviceList: Array<string> = ['Villa 1 nè', 'Villa 2 nè', 'Room 1 nè'];

  contractForm: FormGroup = new FormGroup({
    contractCode: new FormControl('', [Validators.required, Validators.pattern('HD-\\d{4}')]),
    contractStartDate: new FormControl('', [Validators.required]),
    contractEndDate: new FormControl('', [Validators.required]),
    contractDeposit: new FormControl('', [Validators.required, Validators.min(0)]),
    employee: new FormControl(this.employeeList[0], [Validators.required]),
    customer: new FormControl(this.customerList[0], [Validators.required]),
    service: new FormControl(this.serviceList[0], [Validators.required])
  });

  get contractCode() {
    return this.contractForm.get('contractCode');
  }
  get contractStartDate() {
    return this.contractForm.get('contractStartDate');
  }
  get contractEndDate() {
    return this.contractForm.get('contractEndDate');
  }
  get contractDeposit() {
    return this.contractForm.get('contractDeposit');
  }
  get employee() {
    return this.contractForm.get('employee');
  }
  get customer() {
    return this.contractForm.get('customer');
  }
  get service() {
    return this.contractForm.get('service');
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }
}
