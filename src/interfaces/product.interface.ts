import { PriceInterface } from './price-data.interface';

export interface ProductInterface {
  id: string;
  imgUrl: string;
  name: string;
  price: PriceInterface;
}
