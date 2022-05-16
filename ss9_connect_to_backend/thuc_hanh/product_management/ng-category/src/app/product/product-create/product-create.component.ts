import {Component, OnInit, Sanitizer} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList:Category[] = [];

  product: Product;
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    manufacturer: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    imageUrl: new FormControl('', [Validators.required]),
    category: new FormControl()
  });
  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  get name() {
    return this.productForm.get('name');
  }
  get manufacturer() {
    return this.productForm.get('manufacturer');
  }
  get imageUrl() {
    return this.productForm.get('imageUrl');
  }
  get category() {
    return this.productForm.get('category');
  }

  getCategoryList() {
    this.categoryService.getAll('').subscribe(res => {
      // @ts-ignore
      this.categoryList = res.content;
      console.log(this.categoryList);
    })
  }

  addNewProduct() {
    this.product = this.productForm.value;
    this.categoryService.findById(this.productForm.get('category').value).subscribe(res => {
      this.product.categoryDTO = res;

      this.productService.saveProduct(this.product).subscribe(() => {
        this.productForm.reset();
        this.router.navigate(['product-list']);
        console.log('Add success!');
      }, error => {
        console.log(error);
      });
    });
  }
}
