import { PriceInterface } from './price-data.interface';

interface ProductFieldDataInterface {
  displayName: string;
  value: string;
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
  additionalFields: Record<string, ProductFieldDataInterface | ProductFieldDataInterface[]>
}