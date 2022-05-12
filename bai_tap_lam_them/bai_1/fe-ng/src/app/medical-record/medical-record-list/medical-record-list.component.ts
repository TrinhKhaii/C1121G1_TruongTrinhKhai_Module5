import { Component, OnInit } from '@angular/core';
import {MedicalRecord} from '../model/medical-record';
import {MedicalRecordService} from '../service/medical-record.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.css']
})
export class MedicalRecordListComponent implements OnInit {

  medicalRecordList: MedicalRecord[];

  constructor(private medicalRecordService: MedicalRecordService) { }

  ngOnInit(): void {
    this.getMedicalRecordList();
  }

  public getMedicalRecordList(): void {
    this.medicalRecordService.getMedicalRecordList().subscribe(
      (response: MedicalRecord[]) => {
        this.medicalRecordList = response;
      },
      (error: HttpErrorResponse) => {
        console.log('Error list');
      }
    );
  }
}
