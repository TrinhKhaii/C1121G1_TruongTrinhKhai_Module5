import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../service/patient.service';
import {Patient} from '../../model/patient';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalRecordService} from '../../service/medical-record.service';
import {Router} from '@angular/router';
import {MedicalRecord} from '../../model/medical-record';

@Component({
  selector: 'app-medical-record-create',
  templateUrl: './medical-record-create.component.html',
  styleUrls: ['./medical-record-create.component.css']
})
export class MedicalRecordCreateComponent implements OnInit {
  patientList: Patient[] = [];
  medicalRecordSave: MedicalRecord;
  medicalRecordForm = new FormGroup({
    medicalRecordCode: new FormControl('', [Validators.required, Validators.pattern('BA-\\d{3}')]),
    startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
    endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
    reason: new FormControl('', [Validators.required]),
    patient: new FormControl('', [Validators.required])
  })

  constructor(private patientService: PatientService,
              private medicalRecordService: MedicalRecordService,
              private router: Router) { }

  ngOnInit(): void {
    console.log("%cBỏ đê thầy ei", "color: red; font-size: xxx-large");
    this.getAllPatient();
  }

  get medicalRecordCode() {
    return this.medicalRecordForm.get('medicalRecordCode');
  }
  get startDate() {
    return this.medicalRecordForm.get('startDate');
  }
  get endDate() {
    return this.medicalRecordForm.get('endDate');
  }
  get reason() {
    return this.medicalRecordForm.get('reason');
  }
  get patient() {
    return this.medicalRecordForm.get('patient');
  }

  validateEndDateBefore() {
    let date1 = new Date(this.medicalRecordForm.get('startDate').value);
    let date2 = new Date(this.medicalRecordForm.get('endDate').value);
    if (date1?.getTime() >= date2?.getTime()) {
      this.medicalRecordForm.get('endDate').setErrors({endDateBefore: true});
    }
  }

  validateStartDateBefore() {
    let date1 = new Date(this.medicalRecordForm.get('startDate').value);
    console.log(date1);
    let today = new Date();
    console.log(today);
    if (date1?.getTime() <= today?.getTime()) {
      this.medicalRecordForm.get('startDate').setErrors({startDateBefore: true});
    }
  }

  getAllPatient() {
    this.patientService.findAll().subscribe(res => {
      this.patientList = res;
      console.log(this.patientList);
      this.medicalRecordForm.controls['patient'].setValue(this.patientList[0]);
    })
  }

  submit(successBtn: HTMLButtonElement) {
    this.medicalRecordSave = this.medicalRecordForm.value;
    console.log(this.medicalRecordSave);
    this.medicalRecordService.save(this.medicalRecordSave).subscribe(() => {
      console.log("Add success!");
      successBtn.click();
      // this.router.navigate(['/medical-record']);
    })
  }
}
