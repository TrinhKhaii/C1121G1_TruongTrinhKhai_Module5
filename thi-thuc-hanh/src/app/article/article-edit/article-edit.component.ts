import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {Article} from '../../model/article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  id: number;
  categoryList: Category[] = [];
  articleEditForm: FormGroup;
  articleEdit: Article;
  constructor(private articleService: ArticleService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.articleEditForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      seller: new FormControl('', [Validators.required]),
      postDate: new FormControl('', [Validators.required]),
      categoryDTO: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      area: new FormControl('', [Validators.required, Validators.pattern('^([2-9]\\d|[1-9]\\d{2,})(.?[0-9]+)?$')]),
      price: new FormControl('', [Validators.required, Validators.pattern('^([1-9]\\d|[1-9]\\d{3,})(.?[0-9]+)?$')]),
      articleType: new FormControl('', Validators.required),
      direction: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getCategoryList();
    this.articleService.findById(this.id).subscribe(res => {
      this.articleEdit = res;
      this.articleEditForm.patchValue(this.articleEdit);
      this.articleEditForm.controls['categoryDTO'].setValue(this.articleEdit.category)
      console.log(this.articleEditForm  );
    })
  }

  compare(a: Category, b: Category): boolean {
    return a && b ? a.id === b.id : a === b;
  }

  get name() {
    return this.articleEditForm.get('name');
  }

  get seller() {
    return this.articleEditForm.get('seller');
  }

  get postDate() {
    return this.articleEditForm.get('postDate');
  }

  get categoryDTO() {
    return this.articleEditForm.get('categoryDTO');
  }

  get address() {
    return this.articleEditForm.get('address');
  }

  get area() {
    return this.articleEditForm.get('area');
  }

  get content() {
    return this.articleEditForm.get('content');
  }

  get articleType() {
    return this.articleEditForm.get('articleType');
  }

  get direction() {
    return this.articleEditForm.get('direction');
  }

  get imageUrl() {
    return this.articleEditForm.get('imageUrl');
  }

  get status() {
    return this.articleEditForm.get('status');
  }

  get price() {
    return this.articleEditForm.get('price');
  }

  getCategoryList() {
    this.categoryService.findAllWS().subscribe(res => {
      this.categoryList = res;
    });
  };

  submit(successBtn: HTMLButtonElement, errorBtn: HTMLButtonElement) {
    this.articleEdit = this.articleEditForm.value;
    console.log(this.articleEdit);
    this.articleService.update(this.articleEdit.id, this.articleEdit).subscribe(() => {
      this.articleEditForm.reset();
      console.log("update success!");
      successBtn.click();
    })
  }
}
