import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../account";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

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
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,}){1,}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$")]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl(),
    phone: new FormControl('', [Validators.required, Validators.pattern("^(090\\d{7})|(091\\d{7})|(\\(\\+84\\)90\\d{7})|(\\(\\+84\\)91\\d{7})$")])
  });


  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  checkConfirmPassword() {
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value) {
      this.registerForm.get('confirmPassword')?.setErrors({notMatch:'Not Match With Passowrd!'});
    }
  }

  checkAge18() {
    if (this.registerForm.get('age')?.value < 18) {
      this.registerForm.get('age')?.setErrors({age18: 'Age must greater than or equal 18.'});
    }
  }

  submit() {
    this.accountList.push(this.registerForm.value);
    console.log(this.registerForm.value);
  }
}
