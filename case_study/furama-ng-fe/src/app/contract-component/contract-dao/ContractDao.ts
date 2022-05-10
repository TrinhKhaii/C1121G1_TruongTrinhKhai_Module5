import {IContract} from "../contract-model/IContract";

export class ContractDao {
  public static contractList: IContract[] = [
    {
      contractId: 1,
      contractCode: "HD-0001",
      contractStartDate: "2022-04-23",
      contractEndDate: "2022-04-28",
      contractDeposit: 1000.0,
      contractTotalMoney: 12000.0,
      deleteFlag: false,
      employeeName: "Trịnh Khải",
      customerName: "Hồ Thanh Tâm",
      serviceName: "Villa 1 nè"
    }
  ]
}
