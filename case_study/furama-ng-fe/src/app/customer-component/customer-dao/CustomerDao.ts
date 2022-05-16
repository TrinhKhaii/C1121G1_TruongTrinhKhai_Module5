import {Customer} from "../customer-model/Customer";

export class CustomerDao {
  public static customerList: Customer[] = [
    {
      customerId: 1,
      customerCode: "KH-001",
      customerName: "Trương Trịnh Khải",
      gender: "Nam",
      dayOfBirth: "21/12/2001",
      idCard: "48201123321",
      phoneNumber: "0901960777",
      email: "truongtrinhkhaidng@gmail.com",
      address: "21 Nguyễn Khang",
      deleteFlag: false,
      customerType: "Diamond"
    }
  ];
}
