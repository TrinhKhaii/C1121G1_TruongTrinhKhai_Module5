import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Account} from "../account";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit, Validators {

  constructor() { }

  ngOnInit(): void {
  }

  accountList: Account[] = [];

  genderList = [
    {id: 1, name: 'Nam'},
    {id: 2, name: 'Nữ'},
    {id: 3, name: 'Khác'}
  ];

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(),
    confirmPasswork: new FormControl(),
    country: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl()
  });

  submit() {
    this.accountList.push(this.registerForm.value);
    console.log(this.registerForm.value);
  }
}
