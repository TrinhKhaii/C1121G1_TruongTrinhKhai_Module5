export interface IContract {
  contractId: number;
  contractCode: string;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  deleteFlag: boolean,
  employeeName: string;
  customerName: string;
  serviceName: string;
}
