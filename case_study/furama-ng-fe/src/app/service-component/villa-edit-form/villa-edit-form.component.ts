import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-villa-edit-form',
  templateUrl: './villa-edit-form.component.html',
  styleUrls: ['./villa-edit-form.component.css']
})
export class VillaEditFormComponent implements OnInit {
  standardRoomList: Array<string> = ['Diamond', 'Silver', 'Member'];

  rentTypeList: Array<string> = ['Year', 'Month', 'Day', 'Hour'];

  villaEditForm: FormGroup = new FormGroup({
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
    return this.villaEditForm.get('serviceCode');
  }

  get serviceName() {
    return this.villaEditForm.get('serviceName');
  }

  get serviceArea() {
    return this.villaEditForm.get('serviceArea');
  }

  get serviceCost() {
    return this.villaEditForm.get('serviceCost');
  }

  get serviceMaxPeople() {
    return this.villaEditForm.get('serviceMaxPeople');
  }

  get standardRoom() {
    return this.villaEditForm.get('standardRoom');
  }

  get descritionOtherConvenience() {
    return this.villaEditForm.get('descritionOtherConvenience');
  }
  get poolArea() {
    return this.villaEditForm.get('poolArea');
  }
  get numberOfFloors() {
    return this.villaEditForm.get('numberOfFloors');
  }

  get rentType() {
    return this.villaEditForm.get('rentType');
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }
}
