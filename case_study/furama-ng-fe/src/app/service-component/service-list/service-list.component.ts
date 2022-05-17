import { Component, OnInit } from '@angular/core';
import {IService} from "../service-model/IService";
import {ServiceDao} from "../service-dao/ServiceDao";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  serviceList: IService[] = ServiceDao.serviceList;


  constructor() { }

  ngOnInit(): void {
    console.log("%cBỏ đê thầy ei", "color: red; font-size: xxx-large");
  }

}
