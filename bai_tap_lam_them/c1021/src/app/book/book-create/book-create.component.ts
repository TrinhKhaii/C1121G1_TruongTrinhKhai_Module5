import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {zoneSymbol} from 'zone.js/lib/common/utils';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book;

  bookForm = new FormGroup({
    bookCode: new FormControl('', [Validators.required, Validators.pattern('S-\\d{4}')]),
    bookName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    author: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)])
  })
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  get bookCode() {
    return this.bookForm.get('bookCode');
  }
  get bookName() {
    return this.bookForm.get('bookName');
  }
  get author() {
    return this.bookForm.get('author');
  }
  get description() {
    return this.bookForm.get('description');
  }
  get quantity() {
    return this.bookForm.get('quantity');
  }


  submit(successBtn: HTMLButtonElement, errorBtn: HTMLButtonElement) {
    if (this.bookForm.valid) {
      this.book = this.bookForm.value;
      this.bookService.save(this.book).subscribe(() => {
        console.log("Add success!");
        successBtn.click();
      })
    } else {
      errorBtn.click();
    }
  }
}
