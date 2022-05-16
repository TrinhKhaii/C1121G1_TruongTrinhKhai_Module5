import {Component, OnInit, Sanitizer} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
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
    categoryDTO: new FormControl('', [Validators.required])
  });

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.getCategoryList();
  }

  ngOnInit(): void {

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
    return this.productForm.get('categoryDTO');
  }

  getCategoryList() {
    this.categoryService.getAll('').subscribe(res => {
      // @ts-ignore
      this.categoryList = res.content;
      console.log(this.categoryList[0]);
      this.productForm.controls['categoryDTO'].setValue(this.categoryList[0]);
    })
  }

  addNewProduct() {
    this.product = this.productForm.value;
    console.log(this.product);
    this.productService.saveProduct(this.product).subscribe(() => {
      this.productForm.reset();
      this.router.navigate(['product-list']);
      console.log('Add success!');
    }, error => {
      console.log(error);
    });
  }
}
