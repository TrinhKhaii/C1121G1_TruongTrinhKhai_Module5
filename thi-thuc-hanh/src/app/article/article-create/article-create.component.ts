import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../../service/article.service';
import {CategoryService} from '../../service/category.service';
import {Article} from '../../model/article';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  categoryList: Category[] = [];
  articleSave: Article;
  date: Date;
  now: string;

  articleForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    seller: new FormControl('Cá nhân', [Validators.required]),
    postDate: new FormControl('', [Validators.required]),
    categoryDTO: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    area: new FormControl('', [Validators.required, Validators.pattern('^([2-9]\\d|[1-9]\\d{2,})(.?[0-9]+)?$')]),
    price: new FormControl('', [Validators.required, Validators.pattern('^([1-9]\\d|[1-9]\\d{3,})(.?[0-9]+)?$')]),
    articleType: new FormControl('Cần bán', Validators.required),
    direction: new FormControl('Đông', Validators.required),
    content: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  constructor(private articleService: ArticleService,
              private categoryService: CategoryService,
              public datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.getCategoryList();
    this.date = new Date();
    this.now = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.articleForm.controls['postDate'].setValue(this.now);
  }

  getCategoryList() {
    this.categoryService.findAllWS().subscribe(res => {
      this.categoryList = res;
      console.log(this.categoryList);
      this.articleForm.controls['categoryDTO'].setValue(this.categoryList[0]);
    });
  };

  get name() {
    return this.articleForm.get('name');
  }

  get seller() {
    return this.articleForm.get('seller');
  }

  get postDate() {
    return this.articleForm.get('postDate');
  }

  get categoryDTO() {
    return this.articleForm.get('categoryDTO');
  }

  get address() {
    return this.articleForm.get('address');
  }

  get area() {
    return this.articleForm.get('area');
  }

  get content() {
    return this.articleForm.get('content');
  }

  get articleType() {
    return this.articleForm.get('articleType');
  }

  get direction() {
    return this.articleForm.get('direction');
  }

  get imageUrl() {
    return this.articleForm.get('imageUrl');
  }

  get status() {
    return this.articleForm.get('status');
  }

  get price() {
    return this.articleForm.get('price');
  }


  submit(successBtn: HTMLButtonElement, errorBtn: HTMLButtonElement) {
    if (this.articleForm.valid) {
      this.articleSave = this.articleForm.value;
      console.log('hihi');
      console.log(this.articleSave);
      this.articleService.saveWS(this.articleSave).subscribe(() => {
        successBtn.click();
      });
    } else {
      errorBtn.click();
    }
  }
}
