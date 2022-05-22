import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  findAll(area: string, price: string, direction: string): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/article?area_like=" + area + "&price_like=" + price + "&direction_like=" + direction)
  }

  save(article: Article): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/article", article);
  }

  findAllWS(area: number, price: number, direction: string, page: number, sort: string): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:8080/api/article?areaSearch=" + area + "&priceSearch=" + price + "&directionSearch=" + direction + "&page=" + page + "&sortSelect=" + sort);
  }

  saveWS(article: Article): Observable<Article> {
    return this.http.post<Article>("http://localhost:8080/api/article/save", article);
  }

  findById(id: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:8080/api/article/" + id);
  }

  update(id: number, article: Article) {
    return this.http.patch<Article>("http://localhost:8080/api/article/update/" + id, article);
  }

  delete(article: Article) {
    return this.http.patch<Article>("http://localhost:8080/api/article/delete", article);
  }
}
