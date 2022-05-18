import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MedicalRecord} from '../model/medical-record';


@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  constructor(private http: HttpClient) {
  }

  findAll(medicalRecordCodeSearchValue: string):Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>('http://localhost:3000/medical-record?medicalRecordCode_like=' + medicalRecordCodeSearchValue);
  }

  save(medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>('http://localhost:3000/medical-record', medicalRecord);
  }

  findById(id: number): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>('http://localhost:3000/medical-record/' + id);
  }

  update(id: number, medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.patch<MedicalRecord>('http://localhost:3000/medical-record/' + id, medicalRecord);
  }

  delete(id: number): Observable<MedicalRecord> {
    return this.http.delete<MedicalRecord>('http://localhost:3000/medical-record/' + id);
  }
}
