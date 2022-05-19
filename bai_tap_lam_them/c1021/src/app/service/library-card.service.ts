import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LibraryCard} from '../model/library-card';

@Injectable({
  providedIn: 'root'
})
export class LibraryCardService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<LibraryCard[]> {
    return this.http.get<LibraryCard[]>('http://localhost:3000/library-card');
  }

  findById(id: number): Observable<LibraryCard> {
    return this.http.get<LibraryCard>('http://localhost:3000/library-card/' + id);
  }

  save(libraryCard: LibraryCard): Observable<LibraryCard> {
    return this.http.post<LibraryCard>('http://localhost:3000/library-card', libraryCard);
  }

  delete(id: number): Observable<LibraryCard> {
    return this.http.delete<LibraryCard>('http://localhost:3000/library-card/' + id);
  }
}
