import { Component, OnInit } from '@angular/core';
import {Contract} from "../contract-model/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList: Contract[] = []

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    console.log("%cBỏ đê thầy ei", "color: red; font-size: xxx-large");
    this.getAll();
  }

  getAll() {
      this.contractService.getAll().subscribe((res: Contract[]) => {
        this.contractList = res;
        console.log(this.contractList)
      })
  }
}
