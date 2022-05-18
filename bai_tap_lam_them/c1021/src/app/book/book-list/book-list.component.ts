import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  p = 1;
  bookNameDelete: string;
  idDelete: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
    console.log(this.bookList);
  }

  getAll() {
    this.bookService.findAll().subscribe(res => {
      this.bookList = res;
    })
  }

  search() {

  }

  addIdToDeleteList(id: number) {

  }

  sendBookInfo(id: number, bookName: string) {
    this.idDelete = id;
    this.bookNameDelete = bookName;
  }

  deleteMedicalRecord(closeModal: HTMLButtonElement, successBtn: HTMLButtonElement) {

  }
}
