import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {Article} from '../../model/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articleList: Article[] = [];
  areaSearchValue: number = 0;
  priceSearchValue: number = 0;
  directionSearchValue: string = '';
  flag = false;
  deleteId: number;
  deleteArticleName: string;
  deleteArticle: Article;
  totalPages: number;
  pageNumber: number = 0;

  sortSelect: string = "";

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAll(this.areaSearchValue, this.priceSearchValue, this.directionSearchValue, this.pageNumber, this.sortSelect);
  }

  getAll(area: number, price: number, direction: string, pageNumber: number, sort: string) {
    this.articleService.findAllWS(area, price, direction, pageNumber, sort).subscribe(res => {
      this.flag = false;
      // @ts-ignore
      this.articleList = res.content;
      // @ts-ignore
      this.totalPages = res.totalPages;
      // @ts-ignore
      this.pageNumber = res.pageable.pageNumber;
    }, error => {
      this.flag = true;
    })
  }


  search() {
    this.getAll(this.areaSearchValue, this.priceSearchValue, this.directionSearchValue, this.pageNumber, this.sortSelect);
  }

  previousPage() {
    this.articleService.findAllWS(this.areaSearchValue, this.priceSearchValue, this.directionSearchValue, this.pageNumber - 1, this.sortSelect).subscribe(res => {
      // @ts-ignore
      this.articleList = res.content;
      // @ts-ignore
      this.totalPages = res.totalPages;
      // @ts-ignore
      this.pageNumber = res.pageable.pageNumber;
    })
  }

  nextPage() {
    this.articleService.findAllWS(this.areaSearchValue, this.priceSearchValue, this.directionSearchValue, this.pageNumber + 1, this.sortSelect).subscribe(res => {
      // @ts-ignore
      this.articleList = res.content;
      // @ts-ignore
      this.totalPages = res.totalPages;
      // @ts-ignore
      this.pageNumber = res.pageable.pageNumber;
    })
  }

  sendArticleInfo(id: number, name: string) {
    this.deleteArticleName = name;
    this.deleteId = id;
  }

  deleteMedicalRecord(closeModal: HTMLButtonElement, successBtn: HTMLButtonElement) {
    this.articleService.findById(this.deleteId).subscribe(res => {
      this.deleteArticle = res;
      this.articleService.delete(this.deleteArticle).subscribe(() => {
        closeModal.click();
        successBtn.click();
        this.ngOnInit();
      })
    })
  }

  sort() {
    this.ngOnInit();
  }
}
