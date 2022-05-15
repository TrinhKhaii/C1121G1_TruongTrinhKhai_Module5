import {Employee} from "./employee";
import {Customer} from "./customer";
import {Service} from "./service";

export interface Contract {
  contractId: number;
  contractCode: string;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  deleteFlag: boolean,
  employee: Employee;
  customer: Customer;
  service: Service;
}
