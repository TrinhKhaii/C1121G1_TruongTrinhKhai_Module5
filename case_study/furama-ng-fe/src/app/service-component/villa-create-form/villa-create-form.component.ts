import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-villa-create-form',
  templateUrl: './villa-create-form.component.html',
  styleUrls: ['./villa-create-form.component.css']
})
export class VillaCreateFormComponent implements OnInit {
  standardRoomList: Array<string> = ['Diamond', 'Silver', 'Member'];

  rentTypeList: Array<string> = ['Year', 'Month', 'Day', 'Hour'];


  villaForm: FormGroup = new FormGroup({
    serviceCode: new FormControl('', [Validators.required, Validators.pattern('DV-\\d{4}')]),
    serviceName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    serviceArea: new FormControl('', [Validators.required, Validators.min(0)]),
    serviceCost: new FormControl('', [Validators.required, Validators.min(0)]),
    serviceMaxPeople: new FormControl('', [Validators.required, Validators.min(0)]),
    standardRoom: new FormControl(this.standardRoomList[0], [Validators.required]),
    descritionOtherConvenience: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    poolArea: new FormControl('', [Validators.required, Validators.min(0)]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.min(0)]),
    rentType: new FormControl(this.rentTypeList[0], [Validators.required]),
  });

  get serviceCode() {
    return this.villaForm.get('serviceCode');
  }

  get serviceName() {
    return this.villaForm.get('serviceName');
  }

  get serviceArea() {
    return this.villaForm.get('serviceArea');
  }

  get serviceCost() {
    return this.villaForm.get('serviceCost');
  }

  get serviceMaxPeople() {
    return this.villaForm.get('serviceMaxPeople');
  }

  get standardRoom() {
    return this.villaForm.get('standardRoom');
  }

  get descritionOtherConvenience() {
    return this.villaForm.get('descritionOtherConvenience');
  }
  get poolArea() {
    return this.villaForm.get('poolArea');
  }
  get numberOfFloors() {
    return this.villaForm.get('numberOfFloors');
  }

  get rentType() {
    return this.villaForm.get('rentType');
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }
}
