import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findAll(searchValue: string): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/book?bookName_like=' + searchValue);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/book/' + id);
  }

  update(id: number, book: Book): Observable<Book> {
    return this.http.patch<Book>('http://localhost:3000/book/' + id, book);
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/book', book);
  }
}
