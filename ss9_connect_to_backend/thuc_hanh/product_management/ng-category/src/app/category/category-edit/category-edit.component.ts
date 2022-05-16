import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  id: number;
  category: Category;
  categoryEditForm: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.categoryService.findById(this.id).subscribe((data) => {
      this.category = data;
      this.categoryEditForm = new FormGroup({
        categoryId: new FormControl(this.category.categoryId),
        categoryName: new FormControl(this.category.categoryName, [Validators.required, Validators.maxLength(30)]),
      });
    })
  }

  ngOnInit(): void {
  }

  get name() {
    return this.categoryEditForm.get('categoryName');
  }

  updateCategory() {
    const categoryUpdate = this.categoryEditForm.value;
    this.categoryService.saveCategory(categoryUpdate).subscribe(() => {
      this.categoryEditForm.reset();
      console.log('Update success!');
      this.router.navigate(['/category-list']);
    }, error => {
      console.log(error);
    })
  }
}
