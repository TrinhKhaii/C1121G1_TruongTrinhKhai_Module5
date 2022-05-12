import { Component, OnInit } from '@angular/core';
import {MedicalRecord} from '../model/medical-record';
import {MedicalRecordService} from '../service/medical-record.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-medical-record-edit',
  templateUrl: './medical-record-edit.component.html',
  styleUrls: ['./medical-record-edit.component.css']
})
export class MedicalRecordEditComponent implements OnInit {
  medicalRecordEdit: MedicalRecord;
  editForm = new FormGroup({
    medicalRecordCode: new FormControl('', [Validators.required, Validators.pattern("")]),
    startDate: new FormControl(),
    endDate: new FormControl(),
    reason: new FormControl(),
    patientCode: new FormControl(),
    patientName: new FormControl()
  });

  constructor(private medicalRecordService: MedicalRecordService) { }

  ngOnInit(): void {
  }

  submit() {

  }
}
