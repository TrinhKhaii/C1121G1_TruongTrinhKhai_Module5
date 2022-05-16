import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productEditForm: FormGroup;
  id: number;
  product: Product;
  productDelete: Product;
  nameDelete: string;
  categoryList: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.productEditForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      manufacturer: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      imageUrl: new FormControl('', [Validators.required]),
      categoryDTO: new FormControl('', [Validators.required])
    });
  }

  compare(a: Category, b: Category): boolean {
    return a && b ? a.categoryId === b.categoryId : a === b;
  }

  get name() {
    return this.productEditForm.get('name');
  }
  get manufacturer() {
    return this.productEditForm.get('manufacturer');
  }
  get imageUrl() {
    return this.productEditForm.get('imageUrl');
  }
  get category() {
    return this.productEditForm.get('categoryDTO');
  }

  ngOnInit(): void {
    this.getCategoryList();
    this.productService.findById(this.id).subscribe((data) => {
      this.product = data;
      this.productEditForm.patchValue(this.product);
    });
  }

  getCategoryList() {
    this.categoryService.getAll('').subscribe(res => {
      // @ts-ignore
      this.categoryList = res.content;
      console.log(this.categoryList);
    })
  }

  updateProduct() {
    const productUpdate = this.productEditForm.value;
    console.log(productUpdate);
    this.productService.saveProduct(productUpdate).subscribe(() => {
      this.productEditForm.reset();
      console.log('Update success!');
      this.router.navigate(['/product-list']);
    }, error => {
      console.log(error);
    });
  }

  deleteProduct(closeModal: HTMLButtonElement) {
    this.productService.findById(this.id).subscribe((data) => {
      this.productDelete = data;
      console.log(this.productDelete);
      this.productService.deleteById(this.productDelete).subscribe(() => {
        console.log('Delete success!');
        this.router.navigate(['/product-list']);
      }, error => {
        console.log(error);
      });
      closeModal.click();
    }, error => {
      console.log(error);
    });
  }

  sendNameProduct(nameValue: HTMLInputElement) {
    this.nameDelete = nameValue.value;
  }
}
