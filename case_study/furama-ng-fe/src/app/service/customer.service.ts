import {Injectable, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../customer-component/customer-model/CustomerType";
import {Customer} from "../customer-component/customer-model/Customer";

const API_URL = "http://localhost:8080/api/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit{
  customerList: Array<Customer> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getList(searchName: string, page: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customer_list?page=' + page + '&searchVal=' + searchName);
  }

  getGenderList(): Observable<string[]> {
    return this.http.get<string[]>(API_URL + '/gender_list')
  }

  getCustomerTypeList(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL + '/customer_type_list');
  }

  findCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(API_URL + '/' + id);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/save', customer);
  }

  deleteCustomer(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(API_URL + '/delete', customer);
  }
}
