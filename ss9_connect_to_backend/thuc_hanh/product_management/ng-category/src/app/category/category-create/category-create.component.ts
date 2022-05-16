import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    categoryName: new FormControl('', [Validators.required, Validators.maxLength(30)])
  })
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  get name() {
    return this.categoryForm.get('categoryName');
  }

  addNewCategory() {
    const category = this.categoryForm.value;
    console.log(category);
    this.categoryService.saveCategory(category).subscribe(() => {
      this.categoryForm.reset();
      this.router.navigate(['category-list']);
      console.log('Add success!');
    }, error => {
      console.log(error);
    });
  }
}
