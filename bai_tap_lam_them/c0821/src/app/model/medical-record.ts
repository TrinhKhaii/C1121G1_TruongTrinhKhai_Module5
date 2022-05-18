import {Patient} from './patient';

export interface MedicalRecord {
  id: number,
  medicalRecordCode: string
  medicalRecordName: string
  startDate: string,
  endDate: string,
  reason: string,
  patient: Patient
}
