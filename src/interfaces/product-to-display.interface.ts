import { PriceInterface } from './price-data.interface';

export interface ProductFieldDataInterface {
  displayName: string;
  value: string;
}

export interface RatingInterface {
  maxRating: number;
  rating: number;
}

export interface ProductToDisplayInterface {
  id: string;
  imgUrl: string;
  name: string;
  price: PriceInterface;
  producer: ProductFieldDataInterface;
  guarantee: ProductFieldDataInterface;
  state: ProductFieldDataInterface;
  status: string[];
  locations: string[];
  soldAmount: number;
  category: string;
  subcategory: string;
  ratingData: RatingInterface;
  additionalFields: Record<string, ProductFieldDataInterface | ProductFieldDataInterface[]>
}
