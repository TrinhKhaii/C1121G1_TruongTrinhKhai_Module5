import { Component, OnInit } from '@angular/core';
import {WordService} from '../service/word.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Word} from '../model/word';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: Word;
  constructor(
    private wordService: WordService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id: number = Number(paramMap.get('id'));
      this.word = this.wordService.findById(id);
    });
  }

}
