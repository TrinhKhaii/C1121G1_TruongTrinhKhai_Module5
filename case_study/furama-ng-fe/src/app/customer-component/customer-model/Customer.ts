import {CustomerType} from "./CustomerType";

export interface Customer {
  customerId: number,
  customerCode: string,
  name: string,
  gender: string,
  dayOfBirth: string,
  idCard: string,
  phoneNumber: string,
  email: string,
  address: string,
  deleteFlag: boolean,
  customerType: CustomerType
}
