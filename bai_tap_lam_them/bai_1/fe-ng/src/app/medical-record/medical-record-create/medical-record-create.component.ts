import { Component, OnInit } from '@angular/core';
import {MedicalRecordService} from '../service/medical-record.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalRecord} from '../model/medical-record';
import {Patient} from '../model/patient';


@Component({
  selector: 'app-medical-record-create',
  templateUrl: './medical-record-create.component.html',
  styleUrls: ['./medical-record-create.component.css']
})
export class MedicalRecordCreateComponent implements OnInit {
  createForm = new FormGroup({
    medicalRecordCode: new FormControl('', [Validators.required, Validators.pattern("")]),
    startDate: new FormControl(),
    endDate: new FormControl(),
    reason: new FormControl(),
    patientCode: new FormControl(),
    patientName: new FormControl()
  });

  error: Map<string, string>;

  constructor(private medicalRecordService: MedicalRecordService) { }

  ngOnInit(): void {

  }

  submit() {
    let medicalRecordDTO = {
      medicalRecordCode: this.createForm.value.medicalRecordCode,
      startDate: this.createForm.value.startDate,
      endDate: this.createForm.value.endDate,
      reason: this.createForm.value.reason,
      patientDTO : {
        patientCode: this.createForm.value.patientCode,
        patientName: this.createForm.value.patientName
      }
    };

    console.log(this.createForm.controls.medicalRecordCode.value);
    console.log(this.createForm.value.medicalRecordCode);
    console.log(medicalRecordDTO);

    this.medicalRecordService.addNewMedicalRecord(medicalRecordDTO).subscribe(
        () => {
          console.log('Add success!');
        },
        (error: Map<string, string>) => {
          console.log('hihi');
          console.log(error);
          // this.error = error;
          // let a = this.error.get("endDate");
          // console.log(a);
        }
      );
  };
}
