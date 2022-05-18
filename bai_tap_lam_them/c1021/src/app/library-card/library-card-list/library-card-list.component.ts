import { Component, OnInit } from '@angular/core';
import {LibraryCard} from '../../model/library-card';
import {LibraryCardService} from '../../service/library-card.service';

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
  constructor(private libraryCardService: LibraryCardService) { }

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

  deleteLibraryCard(closeModal: HTMLButtonElement, successBtn: HTMLButtonElement) {

  }

  search() {

  }
}
