import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  totalPages = 0;
  pageNumber: number;
  searchName = '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log("%cBỏ đê thầy ei", "color: red; font-size: xxx-large");
    this.getAllProduct(this.searchName);
  }

  getAllProduct(searchValue) {
    this.productService.getAll(searchValue, this.pageNumber).subscribe(products => {
      // @ts-ignore
      this.products = products.content;
      // @ts-ignore
      this.totalPages = products.totalPages;
      // @ts-ignore
      this.pageNumber = products.pageable.pageNumber;
    }, error => {
      this.products = [];
    });
  }

  previousPage() {
    this.productService.getAll(this.searchName, this.pageNumber - 1).subscribe(products => {
      // @ts-ignore
      this.products = products.content;
      // @ts-ignore
      this.totalPages = products.totalPages;
      // @ts-ignore
      this.pageNumber = products.pageable.pageNumber;
    });
  }
  nextPage() {
    this.productService.getAll(this.searchName, this.pageNumber + 1).subscribe(products => {
      // @ts-ignore
      this.products = products.content;
      // @ts-ignore
      this.totalPages = products.totalPages;
      // @ts-ignore
      this.pageNumber = products.pageable.pageNumber ;
    });
  }

  search() {
    this.getAllProduct(this.searchName);
  }
}

