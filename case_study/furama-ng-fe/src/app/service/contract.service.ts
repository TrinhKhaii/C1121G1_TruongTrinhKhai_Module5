import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Contract} from "../contract-component/contract-model/contract";
import {Customer} from "../model/customer";
import {Service} from "../contract-component/contract-model/service";
import {Employee} from "../contract-component/contract-model/employee";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>('http://localhost:3000/contract');
  }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }

  getServiceList(): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:3000/service');
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }

  saveContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>('http://localhost:3000/contract', contract)
  }
}
