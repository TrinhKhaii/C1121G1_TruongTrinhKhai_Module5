import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {Student} from '../../model/student';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';
import {LibraryCard} from '../../model/library-card';
import {LibraryCardService} from '../../service/library-card.service';

@Component({
  selector: 'app-library-card-create',
  templateUrl: './library-card-create.component.html',
  styleUrls: ['./library-card-create.component.css']
})
export class LibraryCardCreateComponent implements OnInit {
  id: number;
  libraryCardForm: FormGroup;
  studentList: Student[] = [];
  bookBorrow: Book;
  libraryCardSave: LibraryCard;

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService,
              private bookService: BookService,
              private libraryCardService: LibraryCardService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('bookId');
      console.log(this.id);
      this.bookService.findById(this.id).subscribe(res => {
        this.bookBorrow = res;
        this.libraryCardForm = new FormGroup({
          libraryCardCode: new FormControl('', [Validators.required]),
          book: new FormControl(this.bookBorrow, [Validators.required]),
          student: new FormControl('', [Validators.required]),
          startDate: new FormControl('', [Validators.required]),
          endDate: new FormControl('', [Validators.required])
        })
        console.log( this.libraryCardForm);
      })
    });
  }

  ngOnInit(): void {
    this.getStudentList();
  }

  get libraryCardCode() {
    return this.libraryCardForm.get('libraryCardCode');
  }
  get book() {
    return this.libraryCardForm.get('book');
  }
  get student() {
    return this.libraryCardForm.get('student');
  }
  get startDate() {
    return this.libraryCardForm.get('startDate');
  }
  get endDate() {
    return this.libraryCardForm.get('endDate');
  }

  getStudentList() {
    this.studentService.findAll().subscribe(res => {
      this.studentList = res;
      console.log(this.studentList);
      this.libraryCardForm.controls['student'].setValue(this.studentList[0]);
    })
  }

  submit(successBtn: HTMLButtonElement) {
    this.libraryCardSave = this.libraryCardForm.value;
    this.bookBorrow.quantity = this.bookBorrow.quantity - 1;
    this.bookService.update(this.bookBorrow.id, this.bookBorrow).subscribe(() => {
      console.log("Update success!");
      this.libraryCardSave.book.quantity = this.bookBorrow.quantity;
      this.libraryCardService.save(this.libraryCardSave).subscribe(() => {
        console.log("Add success!");
        successBtn.click();
      })
    })

  }

  validateStartDateBefore() {

  }

  validateEndDateBefore() {

  }
}
