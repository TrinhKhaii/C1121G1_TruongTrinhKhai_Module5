import {Patient} from './patient';

export interface MedicalRecord {
  medicalRecordId;
  medicalRecordCode;
  patient: Patient;
  startDate: string;
  endDate: string;
  reason: string;
  deleteFlag: boolean;
}
