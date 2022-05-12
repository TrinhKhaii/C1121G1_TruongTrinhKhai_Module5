import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MedicalRecord} from '../model/medical-record';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getMedicalRecordList(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(this.apiUrl + '/api/medical-record');
  }

  public addNewMedicalRecord(medicalRecord: { reason: any; medicalRecordCode: any; endDate: any; patientDTO: { patientName: any; patientCode: any }; startDate: any }): Observable<Map<string, string>> {
    return this.http.post<Map<string, string>>(this.apiUrl + '/api/medical-record/save', medicalRecord);
  }


}
