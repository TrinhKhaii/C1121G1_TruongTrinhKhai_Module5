import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  nameDelete: string;
  idDelete: number;
  categoryNameDelete: string;
  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getAll('').subscribe(res => {
      // @ts-ignore
      this.categories = res.content;
    })
  }

  deleteCategory(closeModal: HTMLButtonElement) {
    this.categoryService.deleteById(this.idDelete).subscribe(() => {
      console.log('Delete success!');
      this.getCategoryList();
      closeModal.click();
    }, error => {
      console.log(error);
    })
  }

  sendIdDelete(idDelete: number, categoryNameDelete: string) {
    this.idDelete = idDelete;
    this.categoryNameDelete = categoryNameDelete;
    console.log(idDelete);
  }
}
