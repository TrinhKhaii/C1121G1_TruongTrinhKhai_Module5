import { Component, OnInit } from '@angular/core';
import {Word} from '../model/word';
import {WordService} from '../service/word.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList: Word[] = [];
  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.wordList = this.wordService.wordList;
  }
}
