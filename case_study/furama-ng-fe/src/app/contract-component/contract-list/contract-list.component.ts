import { Component, OnInit } from '@angular/core';
import {IContract} from "../contract-model/IContract";
import {ContractDao} from "../contract-dao/ContractDao";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList: IContract[] = ContractDao.contractList;

  constructor() { }

  ngOnInit(): void {
  }

}
