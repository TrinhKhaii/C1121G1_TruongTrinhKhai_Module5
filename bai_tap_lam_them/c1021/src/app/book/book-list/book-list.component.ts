import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

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
  bookNameSearch: string = '';
  bookBorrow: Book;

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll(this.bookNameSearch);
    console.log(this.bookList);
  }

  getAll(searchValue: string) {
    this.bookService.findAll(searchValue).subscribe(res => {
      this.bookList = res;
    })
  }

  search() {
    this.getAll(this.bookNameSearch);
  }

  addIdToDeleteList(id: number) {

  }

  sendBookInfo(id: number, bookName: string) {
    this.idDelete = id;
    this.bookNameDelete = bookName;
  }

  deleteMedicalRecord(closeModal: HTMLButtonElement, successBtn: HTMLButtonElement) {

  }

  checkBookQuantity(bookId: number, errorBtn: HTMLButtonElement) {
    this.bookService.findById(bookId).subscribe(res => {
      this.bookBorrow = res;
      if (this.bookBorrow.quantity > 0) {
        this.router.navigate(['/library-card/create', bookId]);
      } else {
        errorBtn.click();
      }
    })
  }
}
