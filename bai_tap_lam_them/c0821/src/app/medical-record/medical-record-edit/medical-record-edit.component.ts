import { Component, OnInit } from '@angular/core';
import {MedicalRecordService} from '../../service/medical-record.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalRecord} from '../../model/medical-record';
import {Patient} from '../../model/patient';
import {PatientService} from '../../service/patient.service';

@Component({
  selector: 'app-medical-record-edit',
  templateUrl: './medical-record-edit.component.html',
  styleUrls: ['./medical-record-edit.component.css']
})
export class MedicalRecordEditComponent implements OnInit {
  id: number;
  patientList: Patient[] = [];
  medicalRecordEditForm: FormGroup;
  medicalRecord: MedicalRecord;
  constructor(private router: Router,
              private medicalRecordService: MedicalRecordService,
              private patientService: PatientService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.medicalRecordEditForm = new FormGroup({
      id: new FormControl(),
      medicalRecordCode: new FormControl('', [Validators.required, Validators.pattern('BA-\\d{3}')]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      patient: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getAllPatient();
    this.medicalRecordService.findById(this.id).subscribe(res => {
      this.medicalRecord = res;
      console.log(this.medicalRecord);
      this.medicalRecordEditForm.patchValue(this.medicalRecord);
      console.log(this.medicalRecordEditForm);
    })
  }

  compare(a: Patient, b: Patient): boolean {
    return a && b ? a.id === b.id : a === b;
  }

  get medicalRecordCode() {
    return this.medicalRecordEditForm.get('medicalRecordCode');
  }
  get startDate() {
    return this.medicalRecordEditForm.get('startDate');
  }
  get endDate() {
    return this.medicalRecordEditForm.get('endDate');
  }
  get reason() {
    return this.medicalRecordEditForm.get('reason');
  }
  get patient() {
    return this.medicalRecordEditForm.get('patient');
  }

  getAllPatient() {
    this.patientService.findAll().subscribe(res => {
      this.patientList = res;
      console.log(this.patientList);
    })
  }

  update(successBtn: HTMLButtonElement) {
    this.medicalRecord = this.medicalRecordEditForm.value;
    console.log(this.medicalRecord);
    this.medicalRecordService.update(this.medicalRecord.id, this.medicalRecord).subscribe(() => {
      this.medicalRecordEditForm.reset();
      console.log("update success!");
      successBtn.click();
    })
  }
}
