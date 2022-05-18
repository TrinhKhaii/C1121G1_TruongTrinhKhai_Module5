import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/book');
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/book/' + id);
  }
}
