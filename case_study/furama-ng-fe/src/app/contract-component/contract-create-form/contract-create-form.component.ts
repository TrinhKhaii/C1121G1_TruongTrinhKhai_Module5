import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {ContractService} from "../../service/contract.service";
import {Employee} from "../contract-model/employee";
import {Service} from "../contract-model/service";
import {Contract} from "../contract-model/contract";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contract-create-form',
  templateUrl: './contract-create-form.component.html',
  styleUrls: ['./contract-create-form.component.css']
})
export class ContractCreateFormComponent implements OnInit {
  employeeList: Employee[] = [];

  customerList: Customer[] = [];

  serviceList: Service[] = [];

  // @ts-ignore
  contract: Contract;

  contractForm = new FormGroup({
    contractCode: new FormControl('', [Validators.required, Validators.pattern('HD-\\d{4}')]),
    contractStartDate: new FormControl('', [Validators.required]),
    contractEndDate: new FormControl('', [Validators.required]),
    contractDeposit: new FormControl('', [Validators.required, Validators.min(0)]),
    contractTotal: new FormControl('', [Validators.required, Validators.min(0)]),
    employee: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required])
  });

  constructor(private contractService: ContractService, private router: Router) {
    this.getCustomerList();
    this.getEmployeeList();
    this.getServiceList()
    this.contractForm = new FormGroup({
      contractCode: new FormControl('', [Validators.required, Validators.pattern('HD-\\d{4}')]),
      contractStartDate: new FormControl('', [Validators.required]),
      contractEndDate: new FormControl('', [Validators.required]),
      contractDeposit: new FormControl('', [Validators.required, Validators.min(0)]),
      contractTotalMoney: new FormControl('', [Validators.required, Validators.min(0)]),
      employee: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  compare(a: any, b: any) {
    return a && b ? a.id === b.id : a === b;
  }

   getCustomerList() {
    this.contractService.getCustomerList().subscribe((res: Customer[]) => {
      this.customerList = res;
      this.contractForm.controls['customer'].setValue(this.customerList[0]);
    });
  };

  getEmployeeList() {
    this.contractService.getEmployeeList().subscribe((res: Employee[]) => {
      this.employeeList = res;
      this.contractForm.controls['employee'].setValue(this.employeeList[0]);
    });
  };

  getServiceList() {
    this.contractService.getServiceList().subscribe((res: Service[]) => {
      this.serviceList = res;
      this.contractForm.controls['service'].setValue(this.serviceList[0]);
    })
  }


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

  get contractTotalMoney() {
    return this.contractForm.get('contractTotalMoney');
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

  submit() {
    this.contract = this.contractForm.value;
    console.log(this.contract)
    this.contractService.saveContract(this.contract).subscribe(res => {
      this.contractService.getAll();
      this.router.navigate(['contract-list']);
    })
  }
}
