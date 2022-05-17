import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  imageurl: string;
  itemWidth: number;
  config = 4;
  index = 0;
  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }
  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
    this.imageurl = this.listImage[0];
  }
  previous() {
    if (this.index > 0) {
      this.imageurl = this.listImage[--this.index];
    }
  }

  next() {
    if (this.index < 3) {
      this.imageurl = this.listImage[++this.index];
    }
  }
}
