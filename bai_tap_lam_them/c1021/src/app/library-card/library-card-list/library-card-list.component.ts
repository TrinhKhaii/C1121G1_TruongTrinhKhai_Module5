import { Component, OnInit } from '@angular/core';
import {LibraryCard} from '../../model/library-card';
import {LibraryCardService} from '../../service/library-card.service';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-library-card-list',
  templateUrl: './library-card-list.component.html',
  styleUrls: ['./library-card-list.component.css']
})
export class LibraryCardListComponent implements OnInit {
  libraryCardList: LibraryCard[] = [];
  p = 1;
  studentNameDelete: string;
  bookNameDelete: string;
  idDelete: number;
  bookBorrow: Book;
  libraryCardDelete: LibraryCard;
  constructor(private libraryCardService: LibraryCardService,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.libraryCardService.findAll().subscribe(res => {
      this.libraryCardList = res;
      console.log(this.libraryCardList);
    })
  }

  sendLibraryCardInfo(id: number, bookName: string, studentName: string) {
    this.idDelete = id;
    this.bookNameDelete = bookName;
    this.studentNameDelete = studentName;
  }

  returnBookByLibraryCardId(id: number) {
    this.libraryCardService.findById(id).subscribe(res => {
      this.libraryCardDelete = res;
      this.bookBorrow = this.libraryCardDelete.book;
      console.log(this.bookBorrow);
      this.bookBorrow.quantity = this.bookBorrow.quantity + 1;
      this.bookService.update(this.bookBorrow.id, this.bookBorrow).subscribe(() => {
        console.log("Return book success!");
      })
    })
  }

  deleteLibraryCard(closeModal: HTMLButtonElement, successBtn: HTMLButtonElement) {
    this.returnBookByLibraryCardId(this.idDelete);
    this.libraryCardService.delete(this.idDelete).subscribe(() => {
      console.log("Delete success!");
      closeModal.click();
      successBtn.click();
      this.ngOnInit();
    })
  }

  search() {

  }
}
