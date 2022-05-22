import {Category} from './category';

export interface Article {
  id: number,
  name: string,
  seller: string,
  postDate: string,
  category: Category,
  address: string,
  area: string,
  price: string,
  articleType: string,
  direction: string,
  content: string,
  imageUrl: string,
  status: string
}
