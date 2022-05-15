import {Component, OnInit, Sanitizer} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    manufacturer: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    imageUrl: new FormControl('', [Validators.required])
  });
  constructor(private productService: ProductService, private router: Router) {
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

  addNewProduct() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      this.router.navigate(['product-list']);
      console.log('Add success!');
    }, error => {
      console.log(error);
    });
  }
}
