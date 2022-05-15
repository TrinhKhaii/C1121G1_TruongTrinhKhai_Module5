import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(searchName: string, page: number): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/api/product?page=' + page + '&searchName=' + searchName);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/api/product/save', product);
  }

  // updateProduct(product): Observable<Product> {
  //   return this.http.patch<Product>(API_URL + 'api/update', product);
  // }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + '/api/product/edit/' + id);
  }

  deleteById(product): Observable<Product> {
    return this.http.patch<Product>(API_URL + '/api/product/delete', product);
  }
}
