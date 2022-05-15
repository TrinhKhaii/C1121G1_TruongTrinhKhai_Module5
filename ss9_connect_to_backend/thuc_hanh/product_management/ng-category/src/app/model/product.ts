import {Category} from './category';

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  imageUrl: string;
  category: Category;
}
