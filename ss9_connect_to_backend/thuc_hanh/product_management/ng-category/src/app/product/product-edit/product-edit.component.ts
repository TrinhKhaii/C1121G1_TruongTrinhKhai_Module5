import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';
import {window} from 'rxjs/operators';

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
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.productService.findById(this.id).subscribe((data) => {
      this.product = data;
      this.productEditForm = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name, [Validators.required, Validators.maxLength(30)]),
        manufacturer: new FormControl(this.product.manufacturer, [Validators.required, Validators.maxLength(30)]),
        imageUrl: new FormControl(this.product.imageUrl, [Validators.required])
      });
    });
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

  ngOnInit(): void {
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
