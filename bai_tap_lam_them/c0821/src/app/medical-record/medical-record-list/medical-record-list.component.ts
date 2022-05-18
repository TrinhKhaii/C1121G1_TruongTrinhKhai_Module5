import { Component, OnInit } from '@angular/core';
import {MedicalRecord} from '../../model/medical-record';
import {MedicalRecordService} from '../../service/medical-record.service';

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.css']
})
export class MedicalRecordListComponent implements OnInit {
  medicalRecordList: MedicalRecord[] = [];
  medicalRecordCodeDelete: string;
  idDelete: number;
  medicalRecordDelete: MedicalRecord;
  p:  number = 1;
  medicalRecordCodeSearchValue = '';
  searchSelect: number = 1;
  listIdDelete: number[] = [];

  constructor(private medicalRecordService: MedicalRecordService) { }

  ngOnInit(): void {
    console.log("%cBỏ đê thầy ei", "color: red; font-size: xxx-large");
    this.getAll(this.medicalRecordCodeSearchValue);
    console.log(this.searchSelect);
  }

  getAll(medicalRecordCodeSearchValue) {
    this.medicalRecordService.findAll(medicalRecordCodeSearchValue).subscribe(res => {
      this.medicalRecordList = res;
      console.log(this.medicalRecordList);
    })
  }

  sendMedicalRecordInfo(id: number, medicalRecordCode: string) {
    this.idDelete = id;
    this.medicalRecordCodeDelete = medicalRecordCode;
  }

  deleteMedicalRecord(closeModal: HTMLButtonElement, successBtn: HTMLButtonElement) {
    this.medicalRecordService.delete(this.idDelete).subscribe(() => {
      console.log("Delete success!");
      closeModal.click();
      successBtn.click();
      this.ngOnInit();
    })
  }

  search() {
    this.getAll(this.medicalRecordCodeSearchValue);
  }

  addIdToDeleteList(id: number) {
    let flag = false;
    for (let idd of this.listIdDelete) {
      if (id == idd) {
        this.listIdDelete = this.listIdDelete.filter(thisId => {
          flag = true;
          return thisId != id;
        })
      }
    }
    if (!flag) {
      this.listIdDelete.push(id);
    }
    console.log(this.listIdDelete);
  }
  countDel = 0;

  deleteMul(closeMulDelModal: HTMLButtonElement) {
    for (let id of this.listIdDelete) {
      this.medicalRecordService.delete(id).subscribe(() => {
        this.countDel++;
      }, error => {}, () => {
        if (this.countDel == this.listIdDelete.length) {
          this.ngOnInit();
          closeMulDelModal.click();
        }
      })
    }
  }
}
