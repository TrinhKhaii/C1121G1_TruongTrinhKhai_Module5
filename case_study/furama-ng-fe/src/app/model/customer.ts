export class Customer {
  private _customerId: number;
  private _customerCode: string;
  private _customerName: string;
  private _gender: string;
  private _dayOfBirth: string;
  private _idCard: string;
  private _phoneNumber: string;
  private _email: string;
  private _address: string;
  private _deleteFlag: boolean;
  private _customerType: string;

  constructor(customerId: number, customerCode: string, customerName: string, gender: string, dayOfBirth: string, idCard: string, phoneNumber: string, email: string, address: string, deleteFlag: boolean, customerType: string) {
    this._customerId = customerId;
    this._customerCode = customerCode;
    this._customerName = customerName;
    this._gender = gender;
    this._dayOfBirth = dayOfBirth;
    this._idCard = idCard;
    this._phoneNumber = phoneNumber;
    this._email = email;
    this._address = address;
    this._deleteFlag = deleteFlag;
    this._customerType = customerType;
  }

  get customerId(): number {
    return this._customerId;
  }

  set customerId(value: number) {
    this._customerId = value;
  }

  get customerCode(): string {
    return this._customerCode;
  }

  set customerCode(value: string) {
    this._customerCode = value;
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get dayOfBirth(): string {
    return this._dayOfBirth;
  }

  set dayOfBirth(value: string) {
    this._dayOfBirth = value;
  }

  get idCard(): string {
    return this._idCard;
  }

  set idCard(value: string) {
    this._idCard = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get deleteFlag(): boolean {
    return this._deleteFlag;
  }

  set deleteFlag(value: boolean) {
    this._deleteFlag = value;
  }

  get customerType(): string {
    return this._customerType;
  }

  set customerType(value: string) {
    this._customerType = value;
  }
}
